<template>
	<div class="active-info">
		<div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">标题</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="title" type="text" pattern="[\s\S]+" placeholder="请输入一个标题"/>
                </div>
            </div>       

            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="desc" type="text" pattern="[\s\S]*" placeholder="补充描述(选填)"/>
                </div>
            </div>

		    <div class="weui-cell">
		        <div class="weui-cell__hd"><label for="" class="weui-label">开始时间</label></div>
		        <div class="weui-cell__bd">
		            <input class="weui-input" type="datetime-local" v-model="startTime" placeholder="开始时间"/>
		        </div>
		    </div>		    

		    <div class="weui-cell">
		        <div class="weui-cell__hd"><label for="" class="weui-label">结束时间</label></div>
		        <div class="weui-cell__bd">
		            <input class="weui-input" type="datetime-local" v-model="endTime" placeholder="结束时间(可不填)"/>
		        </div>
		    </div>

		    <div class="weui-cell">
		    	<div class="weui-cell__hd"><label for="" class="weui-label">活动地点</label></div>
		    	<div class="weui-cell__bd">
		            <span class="weui-input province" @click="selectProvince">{{selectedProvinceName}}</span>
		            <span>省</span>		            
		            <span class="weui-input province" @click="selectCity">{{selectedCityName}}</span>
		            <span>市</span>		            
		            <span class="weui-input province" @click="selectArea">{{selectedAreaName}}</span>
		            <span>区</span>

                    <input class="weui-input" style="display: block;margin-top: 10px;" v-model="detailPlace" type="text" pattern="[\s\S]+" placeholder="请填写活动详细地点(选填)"/>
                </div>
		    </div>

            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">组织单位</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" v-model="organization" type="text" pattern="[\s\S]+" placeholder="请填写组织单位(不填默认个人组织)"/>
                </div>
            </div>  

             <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系电话</label></div>
                <div class="weui-cell__bd" style="position: relative">
                    <input class="weui-input" type="number" v-model="mobileList" pattern="[\s\S]+" placeholder="请填写联系方式，如有多个，用分号隔开"/>
                </div>
            </div>      

 			<div class="weui-cell">
                <div class="weui-cell__bd">
                    <div class="weui-uploader">
                        <div class="weui-uploader__hd">
                            <p class="weui-uploader__title">上传图片(可不传)</p>
                            <div class="weui-uploader__info">{{picList.length}}/5</div>
                        </div>
                        <p class="pic-desc">* 使用横向图片效果更佳</p>
                        <div class="weui-uploader__bd">
                            <ul class="weui-uploader__files" id="uploaderFiles">
                                <li @click="showGallery(item, index)" class="weui-uploader__file" v-for="(item, index) in picList.slice(0,5)" :style="{'background-image':'url('+item+')'}"></li>
                            </ul>
                            <div class="weui-uploader__input-box">
                                <input id="uploaderInput" v-show="picList.length < 5"  @change="uploadFileChange" class="weui-uploader__input" type="file" accept="image/*" multiple/>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  

		    <div class="weui-cell">
		        <div class="weui-cell__hd"><label for="" class="weui-label">报名截止日期</label></div>
		        <div class="weui-cell__bd">
		            <input class="weui-input" type="datetime-local" v-model="participateEnding" placeholder=""/>
		        </div>
		    </div>  

			<div class="weui-cell">
	            <div class="weui-cell__hd"><label class="weui-label">人数限制</label></div>
	            <div class="weui-cell__bd">
	                <input class="weui-input" type="number" v-model="totalLimit" placeholder="请填写限制人数(0则为不限制)"/>
	            </div>
	        </div>   

	        <div class="weui-cell">
	        	<a href="javascript:;" class="create-btn" @click="saveActivity">创建活动</a>
	        </div>                          
        </div>

        <div class="weui-gallery" @click="closeGallery" :style="{display: ifShowGallery?'block':'none'}">
		    <span class="weui-gallery__img" :style="{'background-image': 'url('+selectPic+')'}"></span>
		    <div class="weui-gallery__opr">
		        <a href="javascript:" @click.stop="deletePic" class="weui-gallery__del">
		            <i class="weui-icon-delete weui-icon_gallery-delete"></i>
		        </a>
		    </div>
		</div>


	</div>
</template>

<script>
	// import province from '../../assets/js/province'
	import { uploadPic, createActivity, getLocations, getFileMd5 } from '../../assets/js/api'
	export default {
		data() {
			return {
				title: '',
				desc: '',
				startTime: '',
				endTime: '',
				detailPlace: '',
				organization: '',
				mobileList: '',
				participateEnding: '',
				totalLimit: '',
				picList: [],
				fileList: [],
				selectPic: '',
				selectIndex: -1,
				maxPic: 5,
				myProvince: [],
				myCity: [],
				myArea: [],
				ifShowGallery: false,
				selectedProvinceName: '请选择',
				selectedCityName: '请选择',
				selectedAreaName: '请选择',				
				selectedProvince: '',
				selectedCity: '',
				selectedArea: '',
			}
		},
		mounted() {
			this.getLocationData( 0, 0 )
		},
		methods: {
			getLocationData( code, level ) {
				getLocations( code )
				.then(res => {
					console.log(res)
					this.initLocation(res.body, level)
				})
			},
			initLocation( data, level ) {
				let myProvince = []

				data.forEach((item)=>{
					myProvince.push({
						label: item.name,
						value: item.code,
					})
				})
				if(level == 0) {
					this.myProvince = myProvince
				} else if(level == 1) {
					this.myCity = myProvince
				} else if(level == 2) {
					this.myArea = myProvince
				}
			},
			showGallery(item, index) {
				this.ifShowGallery = true
				this.selectPic = item
				this.selectIndex = index
			},
			deletePic() {
				this.picList.splice(this.selectIndex, 1)
				this.fileList.splice(this.selectIndex, 1)
				console.log(this.picList.length, this.fileList)
				this.ifShowGallery = false
			},
			closeGallery() {
				this.ifShowGallery = false
			},
			checkActivity() {
				let checkObj = {
					title: {
						name: '标题',
						default: ''
					},
					startTime: {
						name: '开始时间',
						default: '',
					},
					selectedProvince: {
						name: '省份',
						default: '',
					},
					selectedCity: {
						name: '城市',
						default: '',
					},
					selectedArea: {
						name: '区县',
						default: ''
					},
					detailPlace: {
						name: '活动详细地点',
						default: '',
					},
					mobileList: {
						name: "联系方式",
						default: '',
					},
					participateEnding: {
						name: "报名截止日期",
						default: '',
					},
					totalLimit: {
						name: '人数限制',
						default: ''
					},
				}
				let flag = true
				for(let key in checkObj) {
					console.log(this.startTime, key, this[key], checkObj[key].default)
					if(this[key] == checkObj[key].default) {
						this.$vux.toast.text(checkObj[key].name + '不能为空')
						flag = false
						return false
					}
				}
				if(!flag) {
					return false
				}
				return true
			},
			getTimeStamp(str) {
				return new Date(str).getTime() / 1000;
			},
			saveActivity() {
				if(this.checkActivity()) {
					console.log("校验成功, 保存活动")
					createActivity(this.title, this.desc, this.organization, getTimeStamp(this.startTime), getTimeStamp(this.endTime), this.mobileList.split(';'), this.selectedArea, this.detailPlace, getTimeStamp(this.participateEnding), this.totalLimit
					)
					.then(res => {
						if(this.picList.length > 0) {
							console.log('保存成功，开始上传图片')
							this.fileList.forEach(item => {
								this.uploadFile(res.body.id, item)
							})
						}
					})
				}
			},
			uploadFileChange(e) {
	          console.log(e)
	          var files = e.target.files;
	          for (var i = 0; i < files.length && i < 5; i++) {
	            this.uploadFile(files[i]);
	            // if(this.fileList.length < 5) {
	            // 	this.fileList.push(files[i])
	            // 	this.picList.push(window.URL.createObjectURL(files[i]))
	            // }
	          }
			},
			uploadFile(id, file) {
	          var formData = new FormData();
	          console.log(file)
	          formData.append('fileUpload', file);

	          getFileMd5(formData)
	          .then( res => {
		          uploadPic({
		          	meta: [{
		    //      		serviceId: 5,
						// category: 1,
						// itemId: id,
						fileName: file.name,
						md5: res.body.md5      		          		
		          	}],
	 				fileUpload: formData
		          })
		          .then((res) => {
		            console.log(res, "图片上传")

		          });	          	
	          })

	        },
			selectProvince() {
				let self = this
				weui.picker(this.myProvince, {
		            onChange: function (result) {
		                console.log(result);
		            },
		            onConfirm: function (result) {
		                console.log(result);
		                let province = self.myProvince.filter(item=>item.value===result[0])[0]
		                self.selectedProvince = result[0]
		                self.selectedProvinceName = province.label
		                console.log("拉取城市信息")
		                self.getLocationData(result[0], 1)
		            }
		        });
			},
			selectCity() {
				let self = this
				weui.picker(this.myCity, {
		            onChange: function (result) {
		                console.log(result);
		            },
		            onConfirm: function (result) {
		                console.log(result);
		                let city = self.myCity.filter(item=>item.value===result[0])[0]
		                self.selectedCity = result[0]
		                self.selectedCityName = city.label
		                console.log("拉取城市信息")
		                self.getLocationData(result[0], 2)
		            }
		        });
			},
			selectArea() {
				let self = this
				weui.picker(this.myArea, {
		            onChange: function (result) {
		                console.log(result);
		            },
		            onConfirm: function (result) {
		                console.log(result);
		                let area = self.myArea.filter(item=>item.value===result[0])[0]
		                self.selectedArea = result[0]
		                self.selectedAreaName = area.label
		            }
		        });
			},
		}
	}
</script>

<style lang="less" scoped>
	.active-info {
		/*padding-bottom: 50px;*/
		box-sizing: border-box;
		background: #fff;
		height: 100%;
		overflow: scroll;
		.weui-cells {
			margin-top: 0;
		}
		.province {
			width: 50px;
			margin-left: 10px;
			&:first-child {
				margin-left: 0;
			}
		}
		.time-logo {
			width: 22px;
			height: 22px;
		}
		.pic-desc {
			/*text-indent: 40px;*/
			font-size: 12px;
			color: #fb9c27;
			/*line-height: 2;*/
			margin-top: -6px;
			margin-bottom: 10px;
		}
		.create-btn {
			width: 120px;
			height: 34px;
			font-size: 14px;
			line-height: 34px;
			color: #fff;
			text-align: center;
			background: #1db2c2;
			margin: 4px auto;
		}
	}
</style>