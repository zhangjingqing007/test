<template>
    <div class="recommend">
      <div class="recommend-content">
        <div v-if="recommends.length" class="slider-wrapper">
          <!--轮播图-->
          <slider>
            <div v-for="item in recommends" :key="item.id">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" />
              </a>
            </div>
          </slider>
        </div>
      </div>
      <div class="recommend-list">
        <h1>热门歌单推荐</h1>
        <ul>
          <li>
            <div class="icon"><img src="" alt=""></div>
            <div class="text">
              <h2 class="name"></h2>
              <p class="desc"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
 <script type="text/ecmascript-6">
  import {getRecommend, getDiscList} from 'api/recommend'
  import {ERR_OK} from 'api/config'
  import slider from '@/base/slider/slider'
  export default{
  components :{
    slider
  },
  data (){
    return {
      recommends:[],
      recommendsList:[]
    }
  },
   methods:{
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then( res => {
          if (res.code === ERR_OK) {
            this.recommendsList = res.data
          }        
        })
      }    
   },
   created (){
     this._getRecommend()
     this._getDiscList()
   }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .recommend
    position: absolute
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
</style>