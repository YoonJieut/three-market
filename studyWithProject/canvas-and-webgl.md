# Canvas 및 WebGL 개념 학습

Canvas와 WebGL의 기본 개념을 이해하고, 이를 통해 3D 그래픽을 렌더링하는 방법을 학습

## Canvas

- Canvas는 HTML 요소로, 스크립트를 사용해 2D 그래픽을 그릴 수 있는 공간을 제공
- 주로 게임, 데이터 시각화, 그림판 등 그래픽 처리가 필요한 곳에서 사용

### 예시

```
// html
<canvas id="myCanvas" width="500" height="500"></canvas>
```

### 내부 작동원리

Canvas는 픽셀 단위의 이미지를 다룸
JavaScript를 통해 Canvas API를 호출하면, 해당 픽셀 데이터를 직접 조작하여 그래픽을 그림.

1. Canvas 초기화

- 브라우저는 <canvas> 요소를 해석하여 특정 크기의 비트맵 생성
- 예시로, getContext('2d')를 호출하면 2D 렌더링 컨텍스트를 반환

2. 예시, 2d 렌더링 컨텍스트에 도형 그리기

- fillRect, arc 등의 메서드를 호출하면, 해당 도형의 픽셀 데이터를 비트맵에 직접 그림
  이 과정은 내부적으로 브라우저가 최적화하여 매우 빠르게 처리

3. 화면 출력

- 변경된 비트맵 데이터는 브라우저에 의해 화면에 렌더링
- 이 과정은 자바스크립트 이벤트 루프와 밀접하게 연관되어 있어, 빠른 속도로 애니메이션을 처리할 수 있음

## WebGL

- Web Graphics Library은 웹 브라우저에서 3D 그래픽을 렌더링하는 표준 API
- OpenGL ES 2.0을 기반
- WebGL을 사용하면 복잡한 3D 장면과 애니메이션을 만들 수 있다.

## 예시

```
// html
<canvas id="glCanvas" width="500" height="500"></canvas>
<script src="webgl.js"></script>
```

---

```
출처
MDN WebGL 기초
HTML5 Canvas 튜토리얼
```
