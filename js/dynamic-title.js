 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         document.title = 'ヽ(●-`Д´-)ノ下次见啦！';
         clearTimeout(titleTime);
     }
     else {
         document.title = 'φ(゜▽゜*)♪欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

