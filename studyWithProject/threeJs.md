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

# react에서 구현하기 "react-three/fiber"

eventSource 속성을 사용하면 이벤트를 처리할 DOM 요소를 직접 지정, 그 외의 영역에서는 이벤트를 무시

```
<div ref={eventSourceRef} style={{ width: '100vw', height: '100vh', border: '1px solid red' }}>
   <Canvas eventSource={eventSourceRef}>
      {/* 3D 씬 컴포넌트들 */}
   </Canvas>
</div>
```

````

출처
Three.js 공식 문서
Three.js 튜토리얼
유튜브 강좌 및 블로그 포스트

```

```

```

```
````
