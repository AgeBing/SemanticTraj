import {textData,getMerge_data,get_data,addParticle} from "../search/searchbar";
import $ from "jquery";



export function add_condition_node(){
   let nodelist= require('../Specification/Node.js')
    nodelist.append_node({name:'',data:[]})
}
