# Canvas 및 WebGL 개념 학습

Canvas와 WebGL의 기본 개념을 이해하고, 이를 통해 3D 그래픽을 렌더링하는 방법을 학습

## Canvas

- Canvas는 HTML 요소로, 스크립트를 사용해 2D 그래픽을 그릴 수 있는 공간을 제공
- 주로 게임, 데이터 시각화, 그림판 등 그래픽 처리가 필요한 곳에서 사용

## 예시

```
// html
<canvas id="myCanvas" width="500" height="500"></canvas>
```

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
