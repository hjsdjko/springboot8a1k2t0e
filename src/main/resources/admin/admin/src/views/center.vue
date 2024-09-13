<template>
  <div :style='{"color":"#666","padding":"20px 30px 30px","fontSize":"14px"}'>
    <el-form
	  :style='{"border":"0px solid rgba(255,255,255,1)","padding":"0px","borderRadius":"4px","alignItems":"flex-start","flexWrap":"wrap","background":"rgba(255,255,255,0)","display":"flex","fontSize":"inherit"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      label-width="150px"
    >  
     <el-row>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='zhiyuanzhe'"  label="志愿者账号" prop="zhiyuanzhezhanghao">
          <el-input v-model="ruleForm.zhiyuanzhezhanghao" readonly              placeholder="志愿者账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='zhiyuanzhe'"  label="志愿者姓名" prop="zhiyuanzhexingming">
          <el-input v-model="ruleForm.zhiyuanzhexingming"               placeholder="志愿者姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='zhiyuanzhe'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in zhiyuanzhexingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='zhiyuanzhe'"  label="联系方式" prop="lianxifangshi">
          <el-input v-model="ruleForm.lianxifangshi"               placeholder="联系方式" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='zhiyuanzhe'"  label="家庭住址" prop="jiatingzhuzhi">
          <el-input v-model="ruleForm.jiatingzhuzhi"               placeholder="家庭住址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='zhiyuanzhe'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="zhiyuanzhetouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='liushouertong'"  label="儿童账号" prop="ertongzhanghao">
          <el-input v-model="ruleForm.ertongzhanghao" readonly              placeholder="儿童账号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='liushouertong'"  label="儿童姓名" prop="ertongxingming">
          <el-input v-model="ruleForm.ertongxingming"               placeholder="儿童姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='liushouertong'"  label="性别" prop="xingbie">
          <el-select v-model="ruleForm.xingbie"  placeholder="请选择性别">
            <el-option
                v-for="(item,index) in liushouertongxingbieOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='liushouertong'"  label="年龄" prop="nianling">
          <el-input v-model="ruleForm.nianling"               placeholder="年龄" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='liushouertong'"  label="联系方式" prop="lianxifangshi">
          <el-input v-model="ruleForm.lianxifangshi"               placeholder="联系方式" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='liushouertong'"  label="家庭住址" prop="jiatingzhuzhi">
          <el-input v-model="ruleForm.jiatingzhuzhi"               placeholder="家庭住址" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='liushouertong'"  label="家庭情况" prop="jiatingqingkuang">
          <el-input v-model="ruleForm.jiatingqingkuang"               placeholder="家庭情况" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='liushouertong'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="liushouertongtouxiangUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='xinliyisheng'"  label="医生工号" prop="yishenggonghao">
          <el-input v-model="ruleForm.yishenggonghao" readonly              placeholder="医生工号" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='xinliyisheng'"  label="医生姓名" prop="yishengxingming">
          <el-input v-model="ruleForm.yishengxingming"               placeholder="医生姓名" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='xinliyisheng'"  label="职称" prop="zhicheng">
          <el-select v-model="ruleForm.zhicheng"  placeholder="请选择职称">
            <el-option
                v-for="(item,index) in xinliyishengzhichengOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='xinliyisheng'"  label="专业擅长" prop="zhuanyeshanzhang">
          <el-input v-model="ruleForm.zhuanyeshanzhang"               placeholder="专业擅长" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}'   v-if="flag=='xinliyisheng'"  label="联系电话" prop="lianxidianhua">
          <el-input v-model="ruleForm.lianxidianhua"               placeholder="联系电话" clearable></el-input>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='xinliyisheng'" label="资质文件" prop="zizhiwenjian">
          <file-upload
          tip="点击上传资质文件"
          action="file/upload"
          :limit="3"
		  :type="3"
          :multiple="true"
          :fileUrls="ruleForm.zizhiwenjian?ruleForm.zizhiwenjian:''"
          @change="xinliyishengzizhiwenjianUploadChange"
          ></file-upload>
        </el-form-item>
        <el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='xinliyisheng'" label="头像" prop="touxiang">
          <file-upload
          tip="点击上传头像"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
          @change="xinliyishengtouxiangUploadChange"
          ></file-upload>
        </el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='xinliyisheng'" label="医生简介" prop="yishengjianjie">
		  <editor
		  	style="min-width: 200px; max-width: 600px;"
			 :style='{"border":"2px solid #000","width":"80%","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","background":"none","height":"auto"}'
		  	v-model="ruleForm.yishengjianjie" 
		  	class="editor" 
		  	action="file/upload">
		  </editor>
		</el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='users'" label="用户名" prop="username">
			<el-input v-model="ruleForm.username" placeholder="用户名"></el-input>
		</el-form-item>
		<el-form-item :style='{"width":"100%","margin":"0 0 30px 0","fontSize":"inherit","color":"inherit"}' v-if="flag=='users'" label="头像" prop="image">
		  <file-upload
		  tip="点击上传头像"
		  action="file/upload"
		  :limit="1"
		  :multiple="false"
		  :fileUrls="ruleForm.image?ruleForm.image:''"
		  @change="usersimageUploadChange"
		  ></file-upload>
		</el-form-item>
		<el-form-item :style='{"padding":"0","margin":"30px 0","alignItems":"center","textAlign":"center","display":"flex","width":"100%","perspective":"320px","-webkitPerspective":"320px","fontSize":"48px","justifyContent":"flex-start"}'>
			<el-button class="btn3" :style='{"border":"0px solid rgba(126, 96, 16, .2)","cursor":"pointer","padding":"0 30px","margin":"0px 20px 0 0","outline":"none","color":"#fff","borderRadius":"0px","background":"#000","width":"auto","fontSize":"16px","lineHeight":"24px","height":"40px"}' type="primary" @click="onUpdateHandler">
				<span class="icon iconfont icon-tijiao16" :style='{"margin":"0 2px","fontSize":"18px","color":"inherit","display":"none"}'></span>
				提交
			</el-button>
		</el-form-item>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isMobile,isPhone,isURL,checkIdCard } from "@/utils/validate";

export default {
  data() {
    return {
      ruleForm: {},
      flag: '',
      usersFlag: false,
      zhiyuanzhexingbieOptions: [],
      liushouertongxingbieOptions: [],
      xinliyishengzhichengOptions: [],
    };
  },
  mounted() {
    var table = this.$storage.get("sessionTable");
    this.flag = table;
    this.$http({
      url: `${this.$storage.get("sessionTable")}/session`,
      method: "get"
    }).then(({ data }) => {
      if (data && data.code === 0) {
        this.ruleForm = data.data;
      } else {
        this.$message.error(data.msg);
      }
    });
    this.zhiyuanzhexingbieOptions = "男,女".split(',')
    this.liushouertongxingbieOptions = "男,女".split(',')
    this.xinliyishengzhichengOptions = "高级,中级,初级".split(',')
  },
  methods: {
    zhiyuanzhetouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    liushouertongtouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
    xinliyishengzizhiwenjianUploadChange(fileUrls) {
        this.ruleForm.zizhiwenjian = fileUrls;
    },
    xinliyishengtouxiangUploadChange(fileUrls) {
        this.ruleForm.touxiang = fileUrls;
    },
	usersimageUploadChange(fileUrls) {
		this.ruleForm.image = fileUrls;
	},
    onUpdateHandler() {
      if((!this.ruleForm.zhiyuanzhezhanghao)&& 'zhiyuanzhe'==this.flag){
        this.$message.error('志愿者账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'zhiyuanzhe'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.zhiyuanzhexingming)&& 'zhiyuanzhe'==this.flag){
        this.$message.error('志愿者姓名不能为空');
        return
      }






      if( 'zhiyuanzhe' ==this.flag && this.ruleForm.lianxifangshi&&(!isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }




        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.ertongzhanghao)&& 'liushouertong'==this.flag){
        this.$message.error('儿童账号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'liushouertong'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.ertongxingming)&& 'liushouertong'==this.flag){
        this.$message.error('儿童姓名不能为空');
        return
      }






      if( 'liushouertong' ==this.flag && this.ruleForm.nianling&&(!isIntNumer(this.ruleForm.nianling))){
       this.$message.error(`年龄应输入整数`);
        return
      }


      if( 'liushouertong' ==this.flag && this.ruleForm.lianxifangshi&&(!isMobile(this.ruleForm.lianxifangshi))){
        this.$message.error(`联系方式应输入手机格式`);
        return
      }






        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }
      if((!this.ruleForm.yishenggonghao)&& 'xinliyisheng'==this.flag){
        this.$message.error('医生工号不能为空');
        return
      }


      if((!this.ruleForm.mima)&& 'xinliyisheng'==this.flag){
        this.$message.error('密码不能为空');
        return
      }


      if((!this.ruleForm.yishengxingming)&& 'xinliyisheng'==this.flag){
        this.$message.error('医生姓名不能为空');
        return
      }








      if( 'xinliyisheng' ==this.flag && this.ruleForm.lianxidianhua&&(!isMobile(this.ruleForm.lianxidianhua))){
        this.$message.error(`联系电话应输入手机格式`);
        return
      }




        if(this.ruleForm.zizhiwenjian!=null) {
                this.ruleForm.zizhiwenjian = this.ruleForm.zizhiwenjian.replace(new RegExp(this.$base.url,"g"),"");
        }


        if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
        }








      if( 'xinliyisheng' ==this.flag && this.ruleForm.clicknum&&(!isIntNumer(this.ruleForm.clicknum))){
       this.$message.error(`点击次数应输入整数`);
        return
      }


      if( 'xinliyisheng' ==this.flag && this.ruleForm.storeupnum&&(!isIntNumer(this.ruleForm.storeupnum))){
       this.$message.error(`收藏数应输入整数`);
        return
      }
      if('users'==this.flag && this.ruleForm.username.trim().length<1) {
	this.$message.error(`用户名不能为空`);
        return	
      }
	  if(this.flag=='users'){
	  	this.ruleForm.image = this.ruleForm.image.replace(new RegExp(this.$base.url,"g"),"")
	  }
      this.$http({
        url: `${this.$storage.get("sessionTable")}/update`,
        method: "post",
        data: this.ruleForm
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.$message({
            message: "修改信息成功",
            type: "success",
            duration: 1500,
            onClose: () => {
				if(this.flag=='users'){
					this.$storage.set('headportrait',this.ruleForm.image)
				}
            }
          });
        } else {
          this.$message.error(data.msg);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #999;
	  	  font-weight: 500;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: inherit;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid #000;
	  	  border-radius: 0px;
	  	  padding: 0 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 350px;
	  	  height: 36px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid #000;
	  	  border-radius: 0px;
	  	  padding: 0 10px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 350px;
	  	  height: 36px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid #000;
	  	  border-radius: 0px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 350px;
	  	  height: 36px;
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
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px solid #000;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: none;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px solid #000;
	  	  cursor: pointer;
	  	  border-radius: 0px;
	  	  color: inherit;
	  	  background: none;
	  	  object-fit: cover;
	  	  width: 180px;
	  	  font-size: 32px;
	  	  line-height: 90px;
	  	  text-align: center;
	  	  height: 90px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid #000;
	  	  border-radius: 0px;
	  	  padding: 12px;
	  	  box-shadow: 0 0 0px rgba(64, 158, 255, .5);
	  	  outline: none;
	  	  color: inherit;
	  	  background: none;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 350px;
	  	  height: 120px;
	  	}
	
	.add-update-preview .btn3 {
				border: 0px solid rgba(126, 96, 16, .2);
				cursor: pointer;
				border-radius: 0px;
				padding: 0 30px;
				margin: 0px 20px 0 0;
				outline: none;
				color: #fff;
				background: #000;
				width: auto;
				font-size: 16px;
				line-height: 24px;
				height: 40px;
			}
	
	.add-update-preview .btn3:hover {
				transform: scale(0.9) skew(-10deg, 10deg);
				opacity: 0.8;
			}
	
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
