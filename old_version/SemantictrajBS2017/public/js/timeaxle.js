import * as d3 from 'd3';
import $ from 'jquery';

export class TimeAxle {
  constructor(svgId, options, minTime = '1990-1-1', maxTime = new Date()) {
    this.options = {width:10, height:10, top:0, left:0, className:'timeaxle', 
          slideColor:'rgba(216,216,216,0.56)', focusColor:'rgba(93, 173, 226, 0.5)'}
    $.each(options, d => this.options[d] = options[d]);
    this.timeScale = d3.scaleTime().domain([new Date(minTime), new Date(maxTime)])
        .range([0, this.options.width]);
    this.newTimeScale = this.timeScale;
    this.parseTime = d3.timeParse('%d-%b-%y');
    this.svg = d3.select('#' + svgId);
    
    this.slideWidth = 4;
    this.slides = [];
    this.initDrag();
    this.init(this.options);

    this.initZoom();
    this.zoom = d3.zoom().scaleExtent([-Infinity, Infinity])
        .on('zoom', this.zoomed);
    this.svg.call(this.zoom);
  }
  initZoom() {
    const This = this;
    this.zoomed = function() {
      const [minNode, maxNode] = This.getSlide();
      const [minTime, maxTime] = This.getTime();
      const t = d3.event.transform;
      This.newTimeScale = t.rescaleX(This.timeScale);
      This.gTime.call(This.timeAxis.scale(This.newTimeScale));
      let minX = This.newTimeScale(minTime);
      let maxX = This.newTimeScale(maxTime);
      minX = minX < 0 ? 0 : (minX + This.slideWidth > This.options.width ?
          This.options.width - This.slideWidth : minX);
      maxX = maxX < 0 ? 0 : (maxX + This.slideWidth > This.options.width ?
          This.options.width - This.slideWidth : maxX);
      minNode.attr('x', minX);
      maxNode.attr('x', maxX);
      d3.select('.timefocus').attr('x', minX+This.slideWidth)
          .attr('width', maxX - minX - This.slideWidth< 0 ? 0 : maxX - minX - This.slideWidth);
    } 
  }
  init(options) {
    this.timeAxle = this.svg.append('g').attr('class', options.className)
        .attr('transform', `translate(${options.left},${options.top})`)
    
    this.timeAxis = d3.axisBottom(this.timeScale)
        .ticks(5)
        .tickFormat(d3.timeFormat('%Y %m %d'));
    this.gTime = this.timeAxle.append('g').attr('class', 'timeaxis')
        .attr('transform', `translate(0, ${options.height})`)
        .call(this.timeAxis);
    this.timeAxle.append('rect').attr('x', this.slideWidth).attr('y', 0)
        .attr('width', options.width - this.slideWidth*2)
        .attr('height', options.height)
        .style('fill', options.focusColor)
        .attr('class', 'timefocus')
        .call(this.focusDrag);
    this.slides.push(
      this.addSlide(this.timeAxle, 0, 0, this.slideWidth, options.height, options)
    );
    this.slides.push(
      this.addSlide(this.timeAxle, options.width-this.slideWidth, 0, this.slideWidth, 
          options.height, options)
    );
  }
  addSlide(node, x, y, width, height, options) {
    return node.append('rect').attr('x', x)
        .attr('y', y)
        .attr('class', 'timeslide')
        .attr('width', width)
        .attr('height', height)
        .style('fill', options.slideColor)
        .style('cursor', 'ew-resize')
        .call(this.drag);
  }
  initDrag() {
    const This = this;
    this.drag = d3.drag()
        .on('drag', function(d) {
          const nowX = d3.event.x > This.options.width - This.slideWidth ? 
              This.options.width - This.slideWidth : (d3.event.x < 0 ? 0 : d3.event.x);
          d3.select(this).attr('x', nowX);
          This.resizeFocus();
        });
    this.focusDrag = d3.drag()
        .on('drag', function() {
          const preX = d3.select('.timefocus').attr('x') * 1;
          const preWidth = d3.select('.timefocus').attr('width') * 1;
          const nowX = preX + d3.event.dx - This.slideWidth < 0 ? This.slideWidth :
              (preX + d3.event.dx + preWidth + This.slideWidth > This.options.width ? 
                  This.options.width - This.slideWidth - preWidth : preX + d3.event.dx);
          d3.select('.timefocus').attr('x', nowX);
          const [minNode, maxNode] = This.getSlide();
          minNode.attr('x', nowX - This.slideWidth);
          maxNode.attr('x', nowX + preWidth);
        })
  }
  resizeFocus() {
    let [minNode, maxNode] = this.getSlide();
    const minX = minNode.attr('x')*1, maxX = maxNode.attr('x')*1; 
    const slideWidth = this.slideWidth;
    d3.selectAll('.timefocus')
        .attr('x', minX + slideWidth)
        .attr('width', Math.max(0, maxX - minX - slideWidth));
  }
  getSlide() {
    let minX = this.options.width+10, maxX = -1, minNode, maxNode;
    this.slides.forEach(node => {
      if (minX > node.attr('x') * 1) {
        minX = node.attr('x') * 1;
        minNode = node;
      }
      if (maxX < node.attr('x') * 1) {
        maxX = node.attr('x') * 1;
        maxNode = node;
      }
    });
    return [minNode, maxNode];
  }
  getTime() {
    const [minNode, maxNode] = this.getSlide();
    const minTime = this.newTimeScale.invert(minNode.attr('x')*1);
    const maxTime = this.newTimeScale.invert(maxNode.attr('x')*1);
    return [minTime, maxTime];
  }
}