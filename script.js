$(function(){

    /* スクロール途中でへダーが表示される処理*/
    const fh = document.getElementById('fixed-header');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 150) {
        fh.classList.add('is-show');
      } else {
        fh.classList.remove('is-show');
      }
    }); 

    /*　動画読み込み前にローディング画面を挿入する処理 */
    $('#bg-video').on('loadedmetadata', () => {
        const hw = document.getElementById('header--wrapper');
        const ci = document.getElementById('center_icon');
        const cm = document.getElementById('center_message');
        setTimeout(function(){
            hw.classList.add('start');
            $('.loadingBody').fadeOut(1500);
        },1500);
        setTimeout(function(){
            ci.classList.add('start');
            cm.classList.add('start');
        },3000);
    });

    /* 背景の動きをズラす（パラドックス）処理*/
    //各背景画像のtopの位置を取得
    var bg1_top = $(".galleryImg").offset().top;
    var bg2_top = $(".contactImg").offset().top;    

    // ウィンドウの高さを取得
    var win_h = $(window).height();

    //各背景画像を動かすタイミングの位置を計算
    var start_bg1 = bg1_top - win_h;
    var start_bg2 = bg2_top - win_h;

    $(window).scroll(function () {
        
        //スクロール量
        var y = $(this).scrollTop();
    
        //スクロール量と動かすタイミング位置を判定した場合は背景画像を動かす
        if (y >= start_bg1) {
        $('.galleryImg').css('background-position-y', -(y - bg1_top) * 0.2 + 'px');
        } 
        if (y >= start_bg2) {
            $('.contactImg').css('background-position-y', -(y - bg2_top) * 0.2 + 'px');
            } 
    });
});