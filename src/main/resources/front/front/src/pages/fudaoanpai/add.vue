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
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="儿童账号" prop="ertongzhanghao">
            <el-select  @change="ertongzhanghaoChange" v-model="ruleForm.ertongzhanghao" placeholder="请选择儿童账号">
              <el-option
                  v-for="(item,index) in ertongzhanghaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="儿童姓名" prop="ertongxingming">
            <el-input v-model="ruleForm.ertongxingming" 
                placeholder="儿童姓名" clearable :disabled=" false  ||ro.ertongxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="头像" v-if="type!='cross' || (type=='cross' && !ro.touxiang)" prop="touxiang">
            <file-upload
            tip="点击上传头像"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
            @change="touxiangUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' class="upload" v-else label="头像" prop="touxiang">
                <img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="联系方式" prop="lianxifangshi">
            <el-input v-model="ruleForm.lianxifangshi" 
                placeholder="联系方式" clearable :disabled=" false  ||ro.lianxifangshi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="家庭住址" prop="jiatingzhuzhi">
            <el-input v-model="ruleForm.jiatingzhuzhi" 
                placeholder="家庭住址" clearable :disabled=" false  ||ro.jiatingzhuzhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="辅导时间" prop="fudaoshijian">
            <el-input v-model="ruleForm.fudaoshijian" 
                placeholder="辅导时间" clearable :disabled=" false  ||ro.fudaoshijian"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}'  label="完成状态" prop="wanchengzhuangtai">
            <el-select v-model="ruleForm.wanchengzhuangtai" placeholder="请选择完成状态" :disabled=" false  ||ro.wanchengzhuangtai" >
              <el-option
                  v-for="(item,index) in wanchengzhuangtaiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="医生工号" prop="yishenggonghao">
            <el-select  @change="yishenggonghaoChange" v-model="ruleForm.yishenggonghao" placeholder="请选择医生工号">
              <el-option
                  v-for="(item,index) in yishenggonghaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="医生姓名" prop="yishengxingming">
            <el-input v-model="ruleForm.yishengxingming" 
                placeholder="医生姓名" clearable :disabled=" false  ||ro.yishengxingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"width":"50%","padding":"10px","margin":"0 0 10px","background":"#fff"}' label="辅导内容" prop="fudaoneirong">
            <el-input
              type="textarea"
              :rows="8"
              placeholder="辅导内容"
              v-model="ruleForm.fudaoneirong">
            </el-input>
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
				ertongzhanghao : false,
				ertongxingming : false,
				touxiang : false,
				lianxifangshi : false,
				jiatingzhuzhi : false,
				fudaoshijian : false,
				fudaoneirong : false,
				wanchengzhuangtai : false,
				yishenggonghao : false,
				yishengxingming : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          ertongzhanghao: '',
          ertongxingming: '',
          touxiang: '',
          lianxifangshi: '',
          jiatingzhuzhi: '',
          fudaoshijian: '',
          fudaoneirong: '',
          wanchengzhuangtai: '已完成' ,
          yishenggonghao: '',
          yishengxingming: '',
        },
        ertongzhanghaoOptions: [],
        wanchengzhuangtaiOptions: [],
        yishenggonghaoOptions: [],


        rules: {
          ertongzhanghao: [
          ],
          ertongxingming: [
          ],
          touxiang: [
          ],
          lianxifangshi: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          jiatingzhuzhi: [
          ],
          fudaoshijian: [
          ],
          fudaoneirong: [
          ],
          wanchengzhuangtai: [
          ],
          yishenggonghao: [
          ],
          yishengxingming: [
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
            if(o=='ertongzhanghao'){
              this.ruleForm.ertongzhanghao = obj[o];
              this.ro.ertongzhanghao = true;
              continue;
            }
            if(o=='ertongxingming'){
              this.ruleForm.ertongxingming = obj[o];
              this.ro.ertongxingming = true;
              continue;
            }
            if(o=='touxiang'){
              this.ruleForm.touxiang = obj[o].split(",")[0];
              this.ro.touxiang = true;
              continue;
            }
            if(o=='lianxifangshi'){
              this.ruleForm.lianxifangshi = obj[o];
              this.ro.lianxifangshi = true;
              continue;
            }
            if(o=='jiatingzhuzhi'){
              this.ruleForm.jiatingzhuzhi = obj[o];
              this.ro.jiatingzhuzhi = true;
              continue;
            }
            if(o=='fudaoshijian'){
              this.ruleForm.fudaoshijian = obj[o];
              this.ro.fudaoshijian = true;
              continue;
            }
            if(o=='fudaoneirong'){
              this.ruleForm.fudaoneirong = obj[o];
              this.ro.fudaoneirong = true;
              continue;
            }
            if(o=='wanchengzhuangtai'){
              this.ruleForm.wanchengzhuangtai = obj[o];
              this.ro.wanchengzhuangtai = true;
              continue;
            }
            if(o=='yishenggonghao'){
              this.ruleForm.yishenggonghao = obj[o];
              this.ro.yishenggonghao = true;
              continue;
            }
            if(o=='yishengxingming'){
              this.ruleForm.yishengxingming = obj[o];
              this.ro.yishengxingming = true;
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
        this.$http.get('option/liushouertong/ertongzhanghao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ertongzhanghaoOptions = res.data.data;
          }
        });
        this.wanchengzhuangtaiOptions = "已完成,待完成".split(',')
        this.$http.get('option/xinliyisheng/yishenggonghao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.yishenggonghaoOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },
      // 下二随
      ertongzhanghaoChange () {
        this.$http.get('follow/liushouertong/ertongzhanghao?columnValue=' + this.ruleForm.ertongzhanghao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.ertongxingming){
              this.ruleForm.ertongxingming = res.data.data.ertongxingming
            }
            if(res.data.data.lianxifangshi){
              this.ruleForm.lianxifangshi = res.data.data.lianxifangshi
            }
            if(res.data.data.jiatingzhuzhi){
              this.ruleForm.jiatingzhuzhi = res.data.data.jiatingzhuzhi
            }
            if(res.data.data.yishengxingming){
              this.ruleForm.yishengxingming = res.data.data.yishengxingming
            }
          }
        });
      },
      // 下二随
      yishenggonghaoChange () {
        this.$http.get('follow/xinliyisheng/yishenggonghao?columnValue=' + this.ruleForm.yishenggonghao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.ertongxingming){
              this.ruleForm.ertongxingming = res.data.data.ertongxingming
            }
            if(res.data.data.lianxifangshi){
              this.ruleForm.lianxifangshi = res.data.data.lianxifangshi
            }
            if(res.data.data.jiatingzhuzhi){
              this.ruleForm.jiatingzhuzhi = res.data.data.jiatingzhuzhi
            }
            if(res.data.data.yishengxingming){
              this.ruleForm.yishengxingming = res.data.data.yishengxingming
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`fudaoanpai/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
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
						this.$http.get('fudaoanpai/list', {
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


								this.$http.post(`fudaoanpai/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`fudaoanpai/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      touxiangUploadChange(fileUrls) {
          this.ruleForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
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
