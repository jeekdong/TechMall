# TechMall

* 项目前端采用Vue.js+Vue-cli+Vue-router+Vuex,后端采用Node.js+Express+MongoDB，Node.js提供后台接口，MongoDB存储数据
* 主要功能有首页商品列表模块，登录模块，购物车模块，地址模块，订单确认/成功模块，通过Vuex集中化管理购物车数量

## #构建步骤

``` bash
# 安装依赖
npm install

# 启动热更新开发模块（http://localhost:8080）
npm run dev

#启动Express服务器（http://localhost:3000）
node server/bin/www

#启动mongoDB
mongod --config xxxxxxx
```

* 如果本地测试时没有mongoDB的数据库，可以采用模拟mock数据，加载商品列表信息（mock数据在项目的mock文件夹），并在buld目录的dev-server.js文件添加以下代码：

  ```javascript
  var goodsData = require("./../mock/goods.json")
  var router = express.Router();
  router.get("/goods",function(req,res,next) {
    res.json(goodsData);
  })
  app.use(router)
  ```

  mock数据结构可按如下设置

  ```json
  {
  	"status":"0",
  	"msg":"",
  	"result":[
  	  {
   	   "productId":"100001",
   	   "productName":"音箱",
  	    "salePrice":199,
   	   "productImage":"1.jpg"
  	  }
  	]
  }
  ```
## #主要功能

* 首页商品列表

  ![goodsList](https://github.com/lemondogs/TechMall/blob/master/pics/goodsList.png)

* 购物车页面

  ![](https://github.com/lemondogs/TechMall/blob/master/pics/cartList.png)

* 地址选择页面

  ![](https://github.com/lemondogs/TechMall/blob/master/pics/address.png)

* 订单确认页面

  ![](https://github.com/lemondogs/TechMall/blob/master/pics/orderConfirm.png)

* 订单成功页面

  ![](https://github.com/lemondogs/TechMall/blob/master/pics/orderSuccess.png)