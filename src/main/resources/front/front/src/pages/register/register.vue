<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231018/e58ea030dd1e4c9ab9828a00aec6dcac.png)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"50px 20px","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.302)","margin":"0 0 0 50%","borderRadius":"10px","alignItems":"center","background":"#fff","flexDirection":"column","display":"flex","width":"50%","justifyContent":"center","height":"auto"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="true" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"30px","color":"#769589","textAlign":"center"}'>USER / REGISTER</div>
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>基于web的留守儿童网站的设计与实现注册</p></div>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="zhiyuanzhezhanghao">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('zhiyuanzhezhanghao')?'required':''">志愿者账号：</div>
				<el-input v-model="registerForm.zhiyuanzhezhanghao"  placeholder="请输入志愿者账号" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="mima">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="mima2">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="zhiyuanzhexingming">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('zhiyuanzhexingming')?'required':''">志愿者姓名：</div>
				<el-input v-model="registerForm.zhiyuanzhexingming"  placeholder="请输入志愿者姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="xingbie">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in zhiyuanzhexingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="lianxifangshi">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
				<el-input v-model="registerForm.lianxifangshi"  placeholder="请输入联系方式" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="jiatingzhuzhi">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('jiatingzhuzhi')?'required':''">家庭住址：</div>
				<el-input v-model="registerForm.jiatingzhuzhi"  placeholder="请输入家庭住址" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='zhiyuanzhe'" prop="touxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="zhiyuanzhetouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="ertongzhanghao">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('ertongzhanghao')?'required':''">儿童账号：</div>
				<el-input v-model="registerForm.ertongzhanghao"  placeholder="请输入儿童账号" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="mima">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="mima2">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="ertongxingming">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('ertongxingming')?'required':''">儿童姓名：</div>
				<el-input v-model="registerForm.ertongxingming"  placeholder="请输入儿童姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="xingbie">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in liushouertongxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="nianling">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model.number="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="lianxifangshi">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('lianxifangshi')?'required':''">联系方式：</div>
				<el-input v-model="registerForm.lianxifangshi"  placeholder="请输入联系方式" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="jiatingzhuzhi">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('jiatingzhuzhi')?'required':''">家庭住址：</div>
				<el-input v-model="registerForm.jiatingzhuzhi"  placeholder="请输入家庭住址" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="jiatingqingkuang">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('jiatingqingkuang')?'required':''">家庭情况：</div>
				<el-input v-model="registerForm.jiatingqingkuang"  placeholder="请输入家庭情况" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='liushouertong'" prop="touxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="liushouertongtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="yishenggonghao">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('yishenggonghao')?'required':''">医生工号：</div>
				<el-input v-model="registerForm.yishenggonghao"  placeholder="请输入医生工号" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="mima">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="mima2">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="yishengxingming">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('yishengxingming')?'required':''">医生姓名：</div>
				<el-input v-model="registerForm.yishengxingming"  placeholder="请输入医生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="zhicheng">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('zhicheng')?'required':''">职称：</div>
                <el-select v-model="registerForm.zhicheng" placeholder="请选择职称" >
                  <el-option
                      v-for="(item,index) in xinliyishengzhichengOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="zhuanyeshanzhang">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('zhuanyeshanzhang')?'required':''">专业擅长：</div>
				<el-input v-model="registerForm.zhuanyeshanzhang"  placeholder="请输入专业擅长" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="lianxidianhua">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('lianxidianhua')?'required':''">联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="zizhiwenjian">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('zizhiwenjian')?'required':''">资质文件：</div>
                <file-upload
					tip="点击上传资质文件"
					action="file/upload"
					:limit="1"
					:type="3"
					:multiple="true"
					:fileUrls="registerForm.zizhiwenjian?registerForm.zizhiwenjian:''"
					@change="xinliyishengzizhiwenjianUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="touxiang">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xinliyishengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"500px","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xinliyisheng'" prop="yishengjianjie">
				<div v-if="true" :style='{"width":"100px","padding":"0 10px 0 0","lineHeight":"44px","fontSize":"14px","color":"#333","textAlign":"right"}' :class="changeRules('yishengjianjie')?'required':''">医生简介：</div>
			    <editor
			        :style='{"width":"500px","height":"auto"}'
			        v-model="registerForm.yishengjianjie" 
			        class="editor" 
			        action="file/upload">
			    </editor>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","margin":"20px 0","color":"#fff","borderRadius":"8px","background":"#769589","display":"block","width":"300px","fontSize":"16px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"none","outline":"none","borderRadius":"8px","background":"rgba(64, 158, 255, 1)","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 10%","color":"rgba(159, 159, 159, 1)","display":"inline-block","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            zhiyuanzhexingbieOptions: [],
            liushouertongxingbieOptions: [],
            xinliyishengzhichengOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='zhiyuanzhe'){
				this.registerForm = {
					zhiyuanzhezhanghao: '',
					mima: '',
					mima2: '',
					zhiyuanzhexingming: '',
					xingbie: '',
					lianxifangshi: '',
					jiatingzhuzhi: '',
					touxiang: '',
				}
			}
			if(this.tableName=='liushouertong'){
				this.registerForm = {
					ertongzhanghao: '',
					mima: '',
					mima2: '',
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
				this.registerForm = {
					yishenggonghao: '',
					mima: '',
					mima2: '',
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
				this.requiredRules.zhiyuanzhezhanghao = [{ required: true, message: '请输入志愿者账号', trigger: 'blur' }]
			}
			if ('zhiyuanzhe' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('zhiyuanzhe' == this.tableName) {
				this.requiredRules.zhiyuanzhexingming = [{ required: true, message: '请输入志愿者姓名', trigger: 'blur' }]
			}
			if ('liushouertong' == this.tableName) {
				this.requiredRules.ertongzhanghao = [{ required: true, message: '请输入儿童账号', trigger: 'blur' }]
			}
			if ('liushouertong' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('liushouertong' == this.tableName) {
				this.requiredRules.ertongxingming = [{ required: true, message: '请输入儿童姓名', trigger: 'blur' }]
			}
			if ('xinliyisheng' == this.tableName) {
				this.requiredRules.yishenggonghao = [{ required: true, message: '请输入医生工号', trigger: 'blur' }]
			}
			if ('xinliyisheng' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xinliyisheng' == this.tableName) {
				this.requiredRules.yishengxingming = [{ required: true, message: '请输入医生姓名', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('zhiyuanzhe' == this.tableName) {
			this.rules.zhiyuanzhezhanghao = [{ required: true, message: '请输入志愿者账号', trigger: 'blur' }];
		  }
		  if ('zhiyuanzhe' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('zhiyuanzhe' == this.tableName) {
			this.rules.zhiyuanzhexingming = [{ required: true, message: '请输入志愿者姓名', trigger: 'blur' }];
		  }
			this.zhiyuanzhexingbieOptions = "男,女".split(',');
		  if ('zhiyuanzhe' == this.tableName) {
			this.rules.lianxifangshi = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('liushouertong' == this.tableName) {
			this.rules.ertongzhanghao = [{ required: true, message: '请输入儿童账号', trigger: 'blur' }];
		  }
		  if ('liushouertong' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('liushouertong' == this.tableName) {
			this.rules.ertongxingming = [{ required: true, message: '请输入儿童姓名', trigger: 'blur' }];
		  }
			this.liushouertongxingbieOptions = "男,女".split(',');
		  if ('liushouertong' == this.tableName) {
			this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('liushouertong' == this.tableName) {
			this.rules.lianxifangshi = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('xinliyisheng' == this.tableName) {
			this.rules.yishenggonghao = [{ required: true, message: '请输入医生工号', trigger: 'blur' }];
		  }
		  if ('xinliyisheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('xinliyisheng' == this.tableName) {
			this.rules.yishengxingming = [{ required: true, message: '请输入医生姓名', trigger: 'blur' }];
		  }
			this.xinliyishengzhichengOptions = "高级,中级,初级".split(',');
		  if ('xinliyisheng' == this.tableName) {
			this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
		  if ('xinliyisheng' == this.tableName) {
			this.rules.clicknum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		  if ('xinliyisheng' == this.tableName) {
			this.rules.storeupnum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      zhiyuanzhetouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      liushouertongtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      xinliyishengzizhiwenjianUploadChange(fileUrls) {
          this.registerForm.zizhiwenjian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      xinliyishengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.zhiyuanzhezhanghao) && `zhiyuanzhe` == this.tableName){
					this.$message.error(`志愿者账号不能为空`);
					return
				}
               if(`zhiyuanzhe` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `zhiyuanzhe` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.zhiyuanzhexingming) && `zhiyuanzhe` == this.tableName){
					this.$message.error(`志愿者姓名不能为空`);
					return
				}
					if(`zhiyuanzhe` == this.tableName && this.registerForm.lianxifangshi &&(!this.$validate.isMobile2(this.registerForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
				if((!this.registerForm.ertongzhanghao) && `liushouertong` == this.tableName){
					this.$message.error(`儿童账号不能为空`);
					return
				}
               if(`liushouertong` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `liushouertong` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.ertongxingming) && `liushouertong` == this.tableName){
					this.$message.error(`儿童姓名不能为空`);
					return
				}
				if(`liushouertong` == this.tableName && this.registerForm.nianling &&(!this.$validate.isIntNumer2(this.registerForm.nianling))){
					this.$message.error(`年龄应输入整数`);
					return
				}
					if(`liushouertong` == this.tableName && this.registerForm.lianxifangshi &&(!this.$validate.isMobile2(this.registerForm.lianxifangshi))){
						this.$message.error(`联系方式应输入手机格式`);
						return
					}
			  if(this.tableName=='xinliyisheng'){
				  this.registerForm.sfsh = '待审核'
			  }
				if((!this.registerForm.yishenggonghao) && `xinliyisheng` == this.tableName){
					this.$message.error(`医生工号不能为空`);
					return
				}
               if(`xinliyisheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xinliyisheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.yishengxingming) && `xinliyisheng` == this.tableName){
					this.$message.error(`医生姓名不能为空`);
					return
				}
					if(`xinliyisheng` == this.tableName && this.registerForm.lianxidianhua &&(!this.$validate.isMobile2(this.registerForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231018/e58ea030dd1e4c9ab9828a00aec6dcac.png);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #769589;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #769589;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #769589;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #769589;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #000;
						width: 300px;
						font-size: 14px;
						height: 44px;
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
		  		  border: 1px dashed #769589;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #000;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px dashed #769589;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #000;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px dashed #769589;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #000;
		  		  width: 80px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: 88px;
				position: absolute;
				content: "*";
			}
</style>
