<template>
  <!--为echarts准备一个具备大小的容器dom-->
  <div>
    <div id="e_map">
        <div id="main" ref="intro" style="height: 500px;width:50%;margin:0 auto"></div>
    </div>
    <div id="park-distribution">
      <div v-for="schools in schoolData" v-if="schools.show">
          <div class="title">
              <h2><span>{{schools.name}}</span><br>海汀顿幼儿<br>园所分布</h2>               
          </div>
              
          <div v-bind:style="mapStyle" class="list">
              <ul class="flex-container">
                  <li class="flex-item" 
                    v-for="item in schools.detail" 
                    @click="getSchoolDetailMes(item,$event)">{{item.name}}</li>                                      
              </ul>
          </div>
      </div> 
                  
    </div>
   <!--  <footerBar key="foot"></footerBar>   -->  
  </div>
  
  
</template>
<script>

  import echarts from 'echarts'
  import 'echarts/lib/chart/map';
  import 'echarts/map/js/china.js';

  import mapData from '../../static/mock/map.json'
  import geoCoordMap from '../../static/mock/geoCoordMap.json'

 /* import footerBar from './footer-bar'*/


    export default {
        components: {
    
        },
        data () {
            return {
                charts: '',
                mapStyle:{
                  height:''
                },
                schoolData:[
                    {"name":"重庆","show":true,"detail":
                      [
                        {name:"海汀顿重庆康德幼儿园"},
                        {name:"海汀顿重庆新壹街幼儿园"},
                        {name:"海汀顿重庆康德幼儿园"},
                        {name:"海汀顿重庆新壹街幼儿园"},
                        {name:"海汀顿重庆新壹街幼儿园"},
                      ]                    
                    },
                    {"name":"四川","show":false,"detail":
                      [
                        {name:"海汀顿成都康德幼儿园"},
                        {name:"海汀顿四川新壹街幼儿园"},
                        {name:"海汀顿四川康德幼儿园"},
                        {name:"海汀顿成都新壹街幼儿园"},
                        {name:"海汀顿四川新壹街幼儿园"},
                      ]
                    },                    
                    {"name":"其他","show":false,"detail":
                      [
                        
                      ]                    
                    }
                                       
                ],
                adress:[
                  ""
                ]
                
            }
        },
        computed: {  
        },         
        methods:{
            convertData (data){
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord.concat(data[i].value)
                        });
                    }
                }
                return res;
            },                      
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               let _this = this;
               this.charts.setOption({
                 tooltip: {
                    //show: false,//不显示提示标签
                    formatter: '{b}', //提示标签格式
                    backgroundColor:"#eab145",//提示标签背景颜色
                    textStyle:{color:"#ffffff"} //提示标签字体颜色
                },
                series: [{
                    type: 'map',
                    mapType: 'china',
                    selectedMode : 'single',
                    label: {
                        normal: {
                            show: true,//显示省份标签
                            textStyle:{color:"#fff"}//省份标签字体颜色
                        },    
                        emphasis: {//对应的鼠标悬浮效果
                            show: true,
                            textStyle:{color:"#fff"}
                        } 
                    },
                    itemStyle: {
                        normal: {
                            borderWidth: 1.5,//区域边框宽度
                            borderColor: '#fff',//区域边框颜色
                            /*areaColor:"#00542d",//区域颜色*/
                        },
                        emphasis: {
                            borderWidth: 1.5,
                            borderColor: '#fff',
                            /*areaColor:"#eab145",*/
                        }
                    },
                    data:mapData
                }]
               })
            },
            selectedMap(){
              let _this = this;
              this.charts.on('click', function (params) {
       
                  let mormalC = "#00542d";
                  let emphasisC = "#eab145";
                  let schoolData = _this.schoolData;
                  /*_this.adress[1].selected = true;
                  _this.adress[0].selected = false;*/
                  let ifHasPlace = false;
                  for (var p in mapData) {
                    if (mapData[p].selected) {
                        mapData[p].selected = false;
                        mapData[p].itemStyle.normal.areaColor = mormalC;
                    }
                    if(mapData[p].name == params.name){
                      mapData[p].selected = true;
                      mapData[p].itemStyle.normal.areaColor = emphasisC;
                    }                
                  }

                  for (var p in schoolData) {
                      schoolData[p].show = false; //数据不全，临时处理方案              
                  }                  
                  for (var p in schoolData) {
                    if(schoolData[p].name == params.name){
                      schoolData[p].show = true;
                      ifHasPlace = true;

                    }                
                  }
                  if(!ifHasPlace){
                    schoolData[2].name = params.name;
                    schoolData[2].show = true;
                  }                  

                  _this.drawPie('main');              
              });
            },
            getSchoolDetailMes(msg, e){
              if(e.target.className == "active"){
                e.target.className = "";
              }else {
                e.target.className = "active";
              }
              
            }
        },
      //调用
        mounted(){
            document.getElementsByTagName("body")[0].className="add_body_style";
            this.$nextTick(function() {
                this.drawPie('main');
                this.selectedMap();
                this.mapStyle.height = document.documentElement.clientHeight-752 + "px";//252为底部+头部高度
            })
        }
    }
</script>
<style lang="scss" type="text/scss">
    @import "../styles/vars"; 
    #e_map {
      position: relative;
      top: -89px;
      background-image: url(../assets/map_bg.png);
      background-repeat: no-repeat;
      background-size: 100%; 
      z-index:0;
    }
   .add_body_style {
      overflow:hidden;
    } 
  #park-distribution {
    position: relative;
    top: -91px;
    background:#d3e4db;
    .title {
      position: relative;
      top: -75px;
      left: 10%;
      width: 200px;
      height: 204px;
      background-image: url(../assets/htd_itr_01.png);
      background-repeat: no-repeat;
      background-size: 90%;
      h2 {
        position: relative;
        top: 11%;
        left: -4%;
        font-size:1rem;
        span {
          line-height: 83px;
          font-size:2.5rem;
        }
      }
    }
    .list {
      position: relative;
      left: 20px;;
      top: -70px;
      ul {
        li {
          width:280px;
          background-image: url(../assets/htd_itr_03.png);
          background-repeat: no-repeat;
          background-size: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center; 
          margin-right:2%;
          margin-bottom:10px;
          transition: all 1s ease;
          &.active {
            background-image: url(../assets/htd_itr_02.png);
          }
          &:hover {
            background-image: url(../assets/htd_itr_02.png);
          }       
        }
      }
    }
  }

.flex-container {
    display: -webkit-flex;
      display: flex;
      -webkit-flex-wrap: wrap;
      -moz-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      -o-flex-wrap: wrap;
      flex-wrap: wrap;
  }
  .flex-item {
      text-align: center;
  }  
</style>