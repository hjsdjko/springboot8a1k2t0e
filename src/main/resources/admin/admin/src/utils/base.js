const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot8a1k2t0e/",
            name: "springboot8a1k2t0e",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot8a1k2t0e/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的留守儿童网站的设计与实现"
        } 
    }
}
export default base
