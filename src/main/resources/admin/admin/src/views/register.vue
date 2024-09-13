<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230928/03f8bd1ca8ab45c6ada205c6e80a1304.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center bottom","backgroundRepeat":"no-repeat","justifyContent":"flex-start"}'>
			<el-form v-if="pageFlag=='register'" :style='{"border":"1px solid #f6f6f6","padding":"20px 20px","margin":"40px 0 40px 60px","borderRadius":"8px","textAlign":"center","background":"rgba(255,255,255,1)","width":"50vw","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm" :rules="rules">
				<div v-if="true" :style='{"padding":"0px","margin":"0px auto 20px","borderColor":"#eee","color":"#333","textAlign":"center","display":"inline-block","background":"none","borderWidth":"0px","width":"50%","lineHeight":"40px","fontSize":"24px","borderStyle":"solid","fontWeight":"600"}' class="title">基于web的留守儿童网站的设计与实现注册</div>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('zhiyuanzhezhanghao')?'required':''">志愿者账号：</div>
					<el-input  v-model="ruleForm.zhiyuanzhezhanghao"  autocomplete="off" placeholder="志愿者账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('zhiyuanzhexingming')?'required':''">志愿者姓名：</div>
					<el-input  v-model="ruleForm.zhiyuanzhexingming"  autocomplete="off" placeholder="志愿者姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in zhiyuanzhexingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('jiatingzhuzhi')?'required':''">家庭住址：</div>
					<el-input  v-model="ruleForm.jiatingzhuzhi"  autocomplete="off" placeholder="家庭住址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='zhiyuanzhe'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="zhiyuanzhetouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('ertongzhanghao')?'required':''">儿童账号：</div>
					<el-input  v-model="ruleForm.ertongzhanghao"  autocomplete="off" placeholder="儿童账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('ertongxingming')?'required':''">儿童姓名：</div>
					<el-input  v-model="ruleForm.ertongxingming"  autocomplete="off" placeholder="儿童姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('xingbie')?'required':''">性别：</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in liushouertongxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('nianling')?'required':''">年龄：</div>
					<el-input  v-model.number="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
					<el-input  v-model="ruleForm.lianxifangshi"  autocomplete="off" placeholder="联系方式"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('jiatingzhuzhi')?'required':''">家庭住址：</div>
					<el-input  v-model="ruleForm.jiatingzhuzhi"  autocomplete="off" placeholder="家庭住址"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('jiatingqingkuang')?'required':''">家庭情况：</div>
					<el-input  v-model="ruleForm.jiatingqingkuang"  autocomplete="off" placeholder="家庭情况"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='liushouertong'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="liushouertongtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('yishenggonghao')?'required':''">医生工号：</div>
					<el-input  v-model="ruleForm.yishenggonghao"  autocomplete="off" placeholder="医生工号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">密码：</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('mima')?'required':''">确认密码：</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('yishengxingming')?'required':''">医生姓名：</div>
					<el-input  v-model="ruleForm.yishengxingming"  autocomplete="off" placeholder="医生姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('zhicheng')?'required':''">职称：</div>
                    <el-select v-model="ruleForm.zhicheng" placeholder="请选择职称" >
                        <el-option
                            v-for="(item,index) in xinliyishengzhichengOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('zhuanyeshanzhang')?'required':''">专业擅长：</div>
					<el-input  v-model="ruleForm.zhuanyeshanzhang"  autocomplete="off" placeholder="专业擅长"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('zizhiwenjian')?'required':''">资质文件：</div>
                    <file-upload
                        tip="点击上传资质文件"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.zizhiwenjian?ruleForm.zizhiwenjian:''"
                        @change="xinliyishengzizhiwenjianUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('touxiang')?'required':''">头像：</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xinliyishengtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0 0px","margin":"0 auto 15px","textAlign":"left","flexWrap":"wrap","display":"block","width":"60%","fontSize":"inherit","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xinliyisheng'">
					<div v-if="true" :style='{"padding":"0 10px","color":"#666","textAlign":"left","display":"inline-block","width":"100%","lineHeight":"40px","fontSize":"14px","order":"2"}' class="lable" :class="changeRules('yishengjianjie')?'required':''">医生简介：</div>
					<editor
						style="min-width: 200px; max-width: 600px;"
						:style='{"width":"100%","height":"auto"}'
						v-model="ruleForm.yishengjianjie" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<button :style='{"border":"0","cursor":"pointer","padding":"0px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"inline-block","outline":"none","borderRadius":"0px","background":"#589cf6","width":"230px","fontSize":"16px","height":"50px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0 20px","margin":"20px 0 0","color":"#589cf6","textAlign":"right","display":"inline-block","width":"auto","lineHeight":"1","fontSize":"16px"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ruleForm: {
			},
			forgetForm: {},
            pageFlag : '',
			tableName:"",
			rules: {},
            zhiyuanzhexingbieOptions: [],
            liushouertongxingbieOptions: [],
            xinliyishengzhichengOptions: [],
		};
	},
	mounted(){
		this.pageFlag = this.$route.query.pageFlag
		if(this.$route.query.pageFlag=='register'){
			
			let table = this.$storage.get("loginTable");
			this.tableName = table;
			if(this.tableName=='zhiyuanzhe'){
				this.ruleForm = {
					zhiyuanzhezhanghao: '',
					mima: '',
					zhiyuanzhexingming: '',
					xingbie: '',
					lianxifangshi: '',
					jiatingzhuzhi: '',
					touxiang: '',
				}
			}
			if(this.tableName=='liushouertong'){
				this.ruleForm = {
					ertongzhanghao: '',
					mima: '',
					ertongxingming: '',
					xingbie: '',
					nianling: '',
					lianxifangshi: '',
					jiatingzhuzhi: '',
					jiatingqingkuang: '',
					touxiang: '',
				}
			}
			if(this.tableName=='xinliyisheng'){
				this.ruleForm = {
					yishenggonghao: '',
					mima: '',
					yishengxingming: '',
					zhicheng: '',
					zhuanyeshanzhang: '',
					lianxidianhua: '',
					yishengjianjie: '',
					zizhiwenjian: '',
					touxiang: '',
					sfsh: '',
					shhf: '',
					clicktime: '',
					clicknum: '',
					storeupnum: '',
				}
			}
			if ('zhiyuanzhe' == this.tableName) {
				this.rules.zhiyuanzhezhanghao = [{ required: true, message: '请输入志愿者账号', trigger: 'blur' }]
			}
			if ('zhiyuanzhe' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('zhiyuanzhe' == this.tableName) {
				this.rules.zhiyuanzhexingming = [{ required: true, message: '请输入志愿者姓名', trigger: 'blur' }]
			}
			if ('liushouertong' == this.tableName) {
				this.rules.ertongzhanghao = [{ required: true, message: '请输入儿童账号', trigger: 'blur' }]
			}
			if ('liushouertong' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('liushouertong' == this.tableName) {
				this.rules.ertongxingming = [{ required: true, message: '请输入儿童姓名', trigger: 'blur' }]
			}
			if ('xinliyisheng' == this.tableName) {
				this.rules.yishenggonghao = [{ required: true, message: '请输入医生工号', trigger: 'blur' }]
			}
			if ('xinliyisheng' == this.tableName) {
				this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xinliyisheng' == this.tableName) {
				this.rules.yishengxingming = [{ required: true, message: '请输入医生姓名', trigger: 'blur' }]
			}
			this.zhiyuanzhexingbieOptions = "男,女".split(',')
			this.liushouertongxingbieOptions = "男,女".split(',')
			this.xinliyishengzhichengOptions = "高级,中级,初级".split(',')
		}
	},
	created() {
	},
	destroyed() {
		  	},
	methods: {
		changeRules(name){
			if(this.rules[name]){
				return true
			}
			return false
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
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

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.zhiyuanzhezhanghao) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`志愿者账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.zhiyuanzhexingming) && `zhiyuanzhe` == this.tableName){
						this.$message.error(`志愿者姓名不能为空`);
						return
					}
					if(`zhiyuanzhe` == this.tableName && this.ruleForm.lianxifangshi &&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					if((!this.ruleForm.ertongzhanghao) && `liushouertong` == this.tableName){
						this.$message.error(`儿童账号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `liushouertong` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `liushouertong` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.ertongxingming) && `liushouertong` == this.tableName){
						this.$message.error(`儿童姓名不能为空`);
						return
					}
					if(`liushouertong` == this.tableName && this.ruleForm.nianling &&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					if(`liushouertong` == this.tableName && this.ruleForm.lianxifangshi &&(!this.$validate.isMobile(this.ruleForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			  if(this.tableName=='xinliyisheng'){
				  this.ruleForm.sfsh = '待审核'
			  }
					if((!this.ruleForm.yishenggonghao) && `xinliyisheng` == this.tableName){
						this.$message.error(`医生工号不能为空`);
						return
					}
					if((!this.ruleForm.mima) && `xinliyisheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xinliyisheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.yishengxingming) && `xinliyisheng` == this.tableName){
						this.$message.error(`医生姓名不能为空`);
						return
					}
					if(`xinliyisheng` == this.tableName && this.ruleForm.lianxidianhua &&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
            if(this.ruleForm.zizhiwenjian!=null) {
                this.ruleForm.zizhiwenjian = this.ruleForm.zizhiwenjian.replace(new RegExp(this.$base.url,"g"),"");
            }
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
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
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230928/03f8bd1ca8ab45c6ada205c6e80a1304.jpg);

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 0px solid #eee;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #f3f3f3;
						width: 100%;
						font-size: 14px;
						height: 50px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #eee;
						border-radius: 0px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #f3f3f3;
						width: 100%;
						font-size: 14px;
						height: 50px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0px solid #eee;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #f3f3f3;
						width: 100%;
						font-size: 14px;
						height: 50px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 0px solid #eee;
						border-radius: 0px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .3);
						outline: none;
						color: #666;
						background: #f3f3f3;
						width: 100%;
						font-size: 14px;
						height: 50px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 0px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #666;
		  		  background: #f3f3f3;
		  		  font-weight: 600;
		  		  width: 120px;
		  		  font-size: 24px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 0px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #666;
		  		  background: #f3f3f3;
		  		  font-weight: 600;
		  		  width: 120px;
		  		  font-size: 24px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 0px solid #eee;
		  		  cursor: pointer;
		  		  border-radius: 0px;
		  		  color: #666;
		  		  background: #f3f3f3;
		  		  font-weight: 600;
		  		  width: 120px;
		  		  font-size: 24px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 0;
				position: absolute;
				content: "*";
				order: 1;
			}
	.editor>.avatar-uploader {
		line-height: 0;
		height: 0;
	}
</style>
