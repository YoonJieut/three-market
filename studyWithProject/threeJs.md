# Three.js 기본 학습

Three.js의 기본 사용법과 기능을 익히고, 3D 모델을 웹 페이지에 표시하는 방법을 학습

## 구조

1. Renderer
2. Scene
   장면 안에 3d 오브젝트들, 안개, 배경, 빛을 모인 최상위 노드
   2-1. light
   2-2. Mesh
   2-2-1. Geometry
   2-2-2. Material
3. Camera
   장면을 화면에 담기 위함, 시야각, 종횡비, 시작과 끝, 위치 등이 있다.

```
"렌더러"가 "카메라"에 담긴 "장면"을 구현해준다
```

## 카메라

코드로 카메라를 설정하는 방법, 카메라의 위치 설정, 카메라 관련 반응형 코드 이해, ov, aspect 개념

### THREE.PerspectiveCamera의 속성

1. Fov
   직접 수치를 기입, 그 수치는 렌즈 분류에 따름

   광각렌즈(35mm 이하, 물체를 가까이 - 크게 보이게), 표준렌즈(50mm, 표준), 망원렌즈(85mm 이상, 물체를 원근감을 주고 - 작게)

2. aspect
   종횡비 = 가로 세로 비율

   브라우저 뷰포트 기준으로 적용하는 코드

   ```
   const aspect = window.innerWidth / window.innerHeight
   ```

3. Near & Far
   Near : 카메라의 시점이 시작되는 위치

   Far : 카메라의 시점이 끝나는 위치

   far 값보다 멀리 있는 요소나 near값보다 가까이 있는 물체는 렌더링되지 않는다.

   앱 성능 향상을 위해 사용할 수 있고, 그 지점을 벗어나면 요소가 안보이게 된다.

4. 반응형 코드 써보기

```
// 반응형, 리사이징 이벤트에 넣으면 사이즈가 바뀌게 된다.
function onResize() {
   camera.aspect = window.innerWidth / window.innerHeight
   camera.updateProjectionMatrix()
   renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', onResize)

```

---

# react에서 구현하기 "react-three/fiber"

eventSource 속성을 사용하면 이벤트를 처리할 DOM 요소를 직접 지정, 그 외의 영역에서는 이벤트를 무시

```
<div ref={eventSourceRef} style={{ width: '100vw', height: '100vh', border: '1px solid red' }}>
   <Canvas eventSource={eventSourceRef}>
      {/* 3D 씬 컴포넌트들 */}
   </Canvas>
</div>
```

```

출처
Three.js 공식 문서
Three.js 튜토리얼
유튜브 강좌 및 블로그 포스트

```
