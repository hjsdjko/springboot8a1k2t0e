<template>
<div :style='{"width":"1200px","padding":"20px","margin":"10px auto 20px","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","padding":"50px 0 80px","position":"relative","flexWrap":"wrap","display":"flex"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
    >
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募标题" prop="zhaomubiaoti">
            <el-input v-model="ruleForm.zhaomubiaoti" 
                placeholder="招募标题" clearable :disabled=" false  ||ro.zhaomubiaoti"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募地点" prop="zhaomudidian">
            <el-input v-model="ruleForm.zhaomudidian" 
                placeholder="招募地点" clearable :disabled=" false  ||ro.zhaomudidian"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募人数" prop="zhaomurenshu">
            <el-input v-model.number="ruleForm.zhaomurenshu" 
                placeholder="招募人数" clearable :disabled=" false  ||ro.zhaomurenshu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募要求" prop="zhaomuyaoqiu">
            <el-input v-model="ruleForm.zhaomuyaoqiu" 
                placeholder="招募要求" clearable :disabled=" false  ||ro.zhaomuyaoqiu"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募时间" prop="zhaomushijian">
            <el-input v-model="ruleForm.zhaomushijian" 
                placeholder="招募时间" clearable :disabled=" false  ||ro.zhaomushijian"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募图片" v-if="type!='cross' || (type=='cross' && !ro.zhaomutupian)" prop="zhaomutupian">
            <file-upload
            tip="点击上传招募图片"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.zhaomutupian?ruleForm.zhaomutupian:''"
            @change="zhaomutupianUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' class="upload" v-else label="招募图片" prop="zhaomutupian">
                <img v-if="ruleForm.zhaomutupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zhaomutupian.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zhaomutupian.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="倒计结束时间" prop="reversetime">
              <el-date-picker
				  :disabled=" false  ||ro.reversetime"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  v-model="ruleForm.reversetime" 
                  type="datetime"
                  placeholder="倒计结束时间">
              </el-date-picker>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="招募详情" prop="zhaomuxiangqing">
            <editor 
                :style='{"minHeight":"200px","padding":"0","boxShadow":"0 0 6px #eee","margin":"0","borderColor":"#ccc","backgroundColor":"#F6F6F6","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'
                v-model="ruleForm.zhaomuxiangqing" 
                class="editor" 
                action="file/upload">
            </editor>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#769589","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"1px solid #769589","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#769589","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				zhaomubiaoti : false,
				zhaomudidian : false,
				zhaomurenshu : false,
				zhaomuyaoqiu : false,
				zhaomushijian : false,
				zhaomuxiangqing : false,
				zhaomutupian : false,
				reversetime : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          zhaomubiaoti: '',
          zhaomudidian: '',
          zhaomurenshu: '',
          zhaomuyaoqiu: '',
          zhaomushijian: '',
          zhaomuxiangqing: '',
          zhaomutupian: '',
          reversetime: '',
          storeupnum: '',
        },


        rules: {
          zhaomubiaoti: [
          ],
          zhaomudidian: [
          ],
          zhaomurenshu: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          zhaomuyaoqiu: [
          ],
          zhaomushijian: [
          ],
          zhaomuxiangqing: [
          ],
          zhaomutupian: [
          ],
          reversetime: [
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='zhaomubiaoti'){
              this.ruleForm.zhaomubiaoti = obj[o];
              this.ro.zhaomubiaoti = true;
              continue;
            }
            if(o=='zhaomudidian'){
              this.ruleForm.zhaomudidian = obj[o];
              this.ro.zhaomudidian = true;
              continue;
            }
            if(o=='zhaomurenshu'){
              this.ruleForm.zhaomurenshu = obj[o];
              this.ro.zhaomurenshu = true;
              continue;
            }
            if(o=='zhaomuyaoqiu'){
              this.ruleForm.zhaomuyaoqiu = obj[o];
              this.ro.zhaomuyaoqiu = true;
              continue;
            }
            if(o=='zhaomushijian'){
              this.ruleForm.zhaomushijian = obj[o];
              this.ro.zhaomushijian = true;
              continue;
            }
            if(o=='zhaomuxiangqing'){
              this.ruleForm.zhaomuxiangqing = obj[o];
              this.ro.zhaomuxiangqing = true;
              continue;
            }
            if(o=='zhaomutupian'){
              this.ruleForm.zhaomutupian = obj[o].split(",")[0];
              this.ro.zhaomutupian = true;
              continue;
            }
            if(o=='reversetime'){
              this.ruleForm.reversetime = obj[o];
              this.ro.reversetime = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`zhaomuxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('zhaomuxinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`zhaomuxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`zhaomuxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      zhaomutupianUploadChange(fileUrls) {
          this.ruleForm.zhaomutupian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #666;
	  font-weight: 500;
	  width: 80px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 80px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  background: #F6F6F6;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 0;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000;
	  background: #F6F6F6;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000;
	  background: #F6F6F6;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000;
	  background: #F6F6F6;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #666;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  background: #F6F6F6;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #666;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  background: #F6F6F6;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #666;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000;
	  background: #F6F6F6;
	  width: 100px;
	  font-size: 32px;
	  line-height: 100px;
	  text-align: center;
	  height: 100px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 0;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #000;
	  background: #F6F6F6;
	  width: 400px;
	  font-size: 14px;
	  min-height: 120px;
	  height: auto;
	}
</style>
