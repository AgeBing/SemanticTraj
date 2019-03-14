// test.cpp : 定义 DLL 应用程序的导出函数。
//

#include "stdafx.h"
#define EXPORT __declspec(dllexport)
#include<iostream>
#include<unordered_map>
#include<vector>
#include <cstring>
#include <sstream>
#include <ctime>
#include <iomanip>
#include <algorithm>
using namespace std;

struct CA {
	char* peopleid;
	int count;
	char* traj;
};

struct Node {
	bool isStop;
	string startTime;
	string endTime;
	double stopTime;
	string site;
	time_t startTimeT;
	time_t endTimeT;
	int stoppoint;
	Node(string time, string site) {
		this->isStop = false;
		this->startTime = time;
		this->endTime = time;
		this->stopTime = 0;
		this->site = site;
		istringstream timeStream(time);
		tm time_tm;
		timeStream >> get_time(&time_tm, "%Y-%m-%d %H:%M:%S.%f");
		this->startTimeT = mktime(&time_tm);
		this->endTimeT = this->startTimeT;
		this->stoppoint = -1;
	}
};

void deepCopy(char **tar, string& sour) {
	(*tar) = (char *)malloc(sour.size() + 1);
	strcpy(*tar, sour.c_str());
}

struct CNode {
	bool isStop;
	char *startTime;
	char *endTime;
	int stopTime;
	char *site;
	int stoppoint;
	CNode() {

	}
	CNode(Node &node) {
		this->isStop = node.isStop;
		//this->startTime = node.startTime.c_str();
		deepCopy(&this->startTime, node.startTime);
		deepCopy(&this->endTime, node.endTime);
		this->stopTime = node.stopTime;
		deepCopy(&this->site, node.site);
		this->stoppoint = node.stoppoint;
	}
};

struct Traj {
	char *peopleid;
	bool matching;
	CNode* trajs;
	int trajLen;
	Traj(string& key, vector<Node>& trajs) {
		deepCopy(&this->peopleid, key);
		this->matching = true;
		this->trajs = (CNode*)malloc(sizeof(CNode) * trajs.size());
		for (int i = 0; i < trajs.size(); ++i) {
			this->trajs[i] = CNode(trajs[i]);
		}
		this->trajLen = trajs.size();
	}
};

struct returnType {
	Traj* traj;
	int cnt;
	returnType(Traj* traj, int cnt) {
		this->traj = traj;
		this->cnt = cnt;
	}
};

void getTrajMap(CA* ca, int num, unordered_map<string, vector<Node>> &traj_map) {
	sort(ca, ca + num, [](CA& lh, CA& rh) {
		if (strcmp(lh.peopleid, rh.peopleid) != 0) {
			return strcmp(lh.peopleid, rh.peopleid) < 0;
		}
		return lh.count < rh.count;
	});
	for (int i = 0; i < num; ++i) {
		string trajs(ca[i].traj), nodeStr;
		istringstream trajsStream(trajs);
		if (traj_map.find(ca[i].peopleid) == traj_map.end()) {
			traj_map[ca[i].peopleid] = {};
		}
		while (getline(trajsStream, nodeStr, ';')) {
			istringstream nodeStream(nodeStr);
			vector<string> node;
			string tmp;
			while (getline(nodeStream, tmp, ',')) {
				node.push_back(tmp);
			}
			traj_map[ca[i].peopleid].emplace_back(node[0], node[1]);
		}
	}
}

void trajNodeMerge(unordered_map<string, vector<Node>> &traj_map, const int STOPTIME) {
	for (auto it = traj_map.begin(); it != traj_map.end(); ++it) {
		vector<Node> tmp;
		for (int i = 0; i < it->second.size(); ++i) {
			auto &now = it->second[i];
			if (i == 0) {
				now.isStop = true;
				tmp.push_back(now);
			}
			else {
				auto &pre = tmp.back();
				if (pre.site == now.site) {
					pre.endTime = now.endTime;
					pre.endTimeT = now.endTimeT;
					pre.stopTime = difftime(pre.endTimeT, pre.startTimeT);
					if (pre.stopTime >= STOPTIME) {
						pre.isStop = true;
					}
				}
				else {
					now.startTime = pre.endTime;
					now.startTimeT = pre.endTimeT;
					now.stopTime = difftime(now.endTimeT, now.startTimeT);
					if (now.stopTime >= STOPTIME) {
						now.isStop = true;
					}
					tmp.push_back(now);
				}
			}
		}
		it->second = tmp;
	}
}

void getSiteCover(char **keys, int *vals, const int SITENUM, unordered_map<string, int>& siteCover) {
	for (int i = 0; i < SITENUM; ++i) {
		siteCover[keys[i]] = vals[i];
	}
}

void filterTrajs(unordered_map<string, vector<Node>>& trajMap,
	unordered_map<string, int>& siteCover, const int STOPNUM, vector<string>& matchTrajId) {
	for (auto it = trajMap.begin(); it != trajMap.end(); ++it) {
		int num = 0,
			state = 0,
			beginIndex = -1,
			endIndex = -1;
		for (int idx = 0; idx < it->second.size(); ++ idx) {
			auto &nowNode = it->second[idx];
			if (nowNode.isStop && siteCover.find(nowNode.site) != siteCover.end()) {
				int nowState = siteCover[nowNode.site];
				if (((1 << num) & (state | nowState)) != 0) {
					if (num == 0) beginIndex = idx;
					nowNode.stoppoint = num;
					++ num;
					state |= (1 << num);
				}
				if (num == STOPNUM) {
					endIndex = idx + 1;
					break;
				}
			}
		}
		if (num == STOPNUM && it ->second.size() > 5) {
			matchTrajId.push_back(it->first);
		}
	}
}

returnType handelTraj(CA* ca, const int STOPTIME, int num,
	char **keys, int *vals, const int SITENUM, const int STOPNUM) {
	// 整理轨迹
	unordered_map<string, vector<Node>> traj_map;
	getTrajMap(ca, num, traj_map);
	// 合并相邻节点
	trajNodeMerge(traj_map, STOPTIME);
	// 获取sitecover
	unordered_map<string, int> siteCover;
	getSiteCover(keys, vals, SITENUM, siteCover);
	// 筛选轨迹
	vector<string> matchTrajId;
	filterTrajs(traj_map, siteCover, STOPNUM, matchTrajId);
	Traj* results = (Traj *)malloc(sizeof(Traj) * matchTrajId.size());
	int cnt = 0;
	for (auto &id : matchTrajId) {
		results[cnt++] = Traj(id, traj_map[id]);
	}
	return returnType(results, cnt);
}

extern "C" {
	EXPORT returnType c_handle_traj(CA* ca, const int STOPTIME, int num,
		char **keys, int *vals, const int SITENUM, const int STOPNUM) {
		return handelTraj(ca, STOPTIME, num, keys, vals, SITENUM, STOPNUM);
	}
}