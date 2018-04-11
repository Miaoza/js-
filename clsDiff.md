
数据生命周期:
          (cookie)可设置失效时间，默认是关闭浏览器后失效       
          (localStorage)除非被清除，否则永久保存                
          (sessionStorage)仅在当前会话下有效，关闭页面或浏览器后被清除

存放数据大小:        
          (cookie)4K左右                                 
          (localStorage)一般为5MB                          
          (sessionStorage)一般为5MB

易用性: 
          (cookie)需要程序员自己封装，源生的Cookie接口不友好   
          (localStorage)源生接口可以接受，亦可再次封装来对Object 和 Array 有更好的支持     
          (sessionStorage)源生接口可以接受，亦可再次封装来对Object 和 Array 有更好的支持

与服务器端通信 :
             (cookie)每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题        
             (localStorage)仅在客户端（即浏览器）中保存，不参与和服务器的通信         
             (sessionStorage)仅在客户端（即浏览器）中保存，不参与和服务器的通
                
         
1.Cookie 是存储在客户端的小型文本文件，可以包含若干键值对，每个键值对可以设置过期时间（默认过期时间为关闭浏览器时）。 
  Cookie 会在每次发送 HTTP 请求时附加到Cookie头字段，服务器以此得知用户所处的状态。 在 HTTP 标准中，
  规定 Cookie 至少要有 4K，至少支持 300 项 Cookie，每个域名至少支持 20 项
 
2.SessionStorage 用于本地存储一个会话（session）中的数据，
  这些数据只有在同一个会话中的页面才能访问并且当会话结束后（关闭标签页，不包括刷新和跳转）数据也随之销毁。
  因此 SessionStorage 不是一种持久化的本地存储，仅仅是会话级别的存储
  SessionStorage 中的 Session 指的是浏览器会话，而非服务器端通过 Cookie 实现的 Session

3.localStorage 可以在多个标签页中互相访问，用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的

