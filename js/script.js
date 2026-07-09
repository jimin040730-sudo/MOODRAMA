/* =======================================================
   2층: 진짜 일렬로 밀리는 트랙 레이아웃
======================================================= */
$(function () {
  $(".drama_wrap2").hide();
  $(".drama_wrap3").hide();
  $(".drama_wrap4").hide();
  $(".drama_wrap5").hide();
  $(".drama_wrap6").hide();
  $(".drama_wrap7").hide();
  $(".drama_wrap8").hide();

  $(".button1").click(function () {
    $(".drama_wrap2").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap1").show();
  });

  $(".button2").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap2").show();
  });

  $(".button3").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap2").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap3").show();
  });

  $(".button4").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap2").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap4").show();
  });

  $(".button5").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap2").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap5").show();
  });

  $(".button6").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap2").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap6").show();
  });

  $(".button7").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap2").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap8").hide();
    $(".drama_wrap7").show();
  });

  $(".button8").click(function () {
    $(".drama_wrap1").hide();
    $(".drama_wrap2").hide();
    $(".drama_wrap3").hide();
    $(".drama_wrap4").hide();
    $(".drama_wrap5").hide();
    $(".drama_wrap6").hide();
    $(".drama_wrap7").hide();
    $(".drama_wrap8").show();
  });
});



// =======================================================
// [2] 1층 카테고리 버튼 제어 함수
// =======================================================
function selectCategory(categoryNum) {
  currentCategory = categoryNum;

  // 2층 트랙 위치 초기화
  trackX = 0;
  targetX = 0;
  velocity = 0;

  // 클래스 이름 상관없이 'selectCategory' 명령어가 붙은 모든 버튼을 다 찾아옵니다.
  const allButtons = document.querySelectorAll('[onclick^="selectCategory"]');

  allButtons.forEach((btn) => {
    // 기존에 켜져 있던 모든 버튼의 'on/active' 클래스를 지우고, 주입했던 인라인 스타일도 리셋합니다.
    btn.classList.remove('on');
    btn.classList.remove('active');
    btn.style.backgroundColor = 'transparent';
    btn.style.color = '#333';
  });

  // 내가 지금 클릭한 그 버튼 하나만 정확히 찾아서 불을 켜줍니다.
  const clickedButton = document.querySelector(`[onclick="selectCategory(${categoryNum})"]`);
  if (clickedButton) {
    clickedButton.classList.add('on');
    clickedButton.style.backgroundColor = '#5E6A82';
    clickedButton.style.color = '#fff';
  }


  initCarousel();
}







// ==========================================================!!!!!!!!!!오디오!!!!!!!!!====================

// 1. querySelectorAll을 써서 .audio_cd1을 가진 모든 이미지를 배열로 다 가져옵니다.
const allCds = document.querySelectorAll('.audio_cd');

// 2. 반복문을 돌면서 모든 CD 각각에 클릭 이벤트를 심어줍니다.
allCds.forEach(function (img) {
  img.addEventListener('click', function () {

    // ⭐️ 핵심: 클릭한 이미지(img)의 바로 '직전 형제 태그(previousElementSibling)'인 오디오를 찾습니다.
    // HTML 구조가 [오디오] - [이미지] 순서로 붙어있기 때문에 가능한 치트키입니다!
    const audio = img.previousElementSibling;

    // 만약 바로 앞 태그가 오디오가 맞다면 실행
    if (audio && audio.tagName === 'AUDIO') {

      // 음악이 멈춰있다면 재생
      if (audio.paused) {
        audio.play();
        img.classList.add('active');
      }
      // 음악이 나오고 있다면 일시정지
      else {
        audio.pause();
        img.classList.remove('active');
      }
    }
  });
});




$(function () {
  $(".ost_wrap2").hide();
  $(".ost_wrap3").hide();
  $(".ost_wrap4").hide();
  $(".ost_wrap5").hide();
  $(".ost_wrap6").hide();
  $(".ost_wrap7").hide();
  $(".ost_wrap8").hide();

  $(".button1").click(function () {
    $(".ost_wrap2").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap1").show();
  });

  $(".button2").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap2").show();
  });

  $(".button3").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap2").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap3").show();
  });

  $(".button4").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap2").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap4").show();
  });

  $(".button5").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap2").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap5").show();
  });

  $(".button6").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap2").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap6").show();
  });

  $(".button7").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap2").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap8").hide();
    $(".ost_wrap7").show();
  });

  $(".button8").click(function () {
    $(".ost_wrap1").hide();
    $(".ost_wrap2").hide();
    $(".ost_wrap3").hide();
    $(".ost_wrap4").hide();
    $(".ost_wrap5").hide();
    $(".ost_wrap6").hide();
    $(".ost_wrap7").hide();
    $(".ost_wrap8").show();
  });
});



// ==========================================================================section6_diary========================================
$(function () {
    // .emotion 안의 모든 img 태그에 클릭 이벤트 바인딩
    $(".emotion li img").click(function () {
        // $(this)는 방금 '클릭한 바로 그 이미지'를 의미합니다.
        var $this = $(this); 
        
        // 현재 이미지의 기존 src와 클래스명을 활용하기 위해 가져옵니다.
        var currentSrc = $this.attr("src");
        
        // 이미 'on' 상태인지 확인 (클래스 토글)
        $this.toggleClass("on");
        
        if ($this.hasClass("on")) {
            // 확장자(.png) 직전에 _h를 붙여서 face10_h.png 형태로 변경
            var newSrc = currentSrc.replace(".png", "_h.png");
            $this.attr("src", newSrc);
        } else {
            // 다시 원래대로 face10.png 형태로 변경
            var newSrc = currentSrc.replace("_h.png", ".png");
            $this.attr("src", newSrc);
        }
    });
});