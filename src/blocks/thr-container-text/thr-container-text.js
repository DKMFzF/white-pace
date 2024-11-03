setTimeout(() => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 20;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Прозрачный фон для текста
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('#thrSection').appendChild(renderer.domElement);

  const fontLoader = new THREE.FontLoader();
  let textMesh;

  fontLoader.load(
    'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
    (font) => {
      const textGeometry = new THREE.TextGeometry('whitepace', {
        font: font,
        size: 5,
        height: 1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.5,
        bevelSize: 0.2,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0x4f9cf9,
        shininess: 100,
        specular: 0xffffff,
      });

      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textGeometry.center();
      scene.add(textMesh);

      textMesh.position.y = -20;
      animate();
    }
  );

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 5).normalize();
  scene.add(directionalLight);

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    if (scrollY < windowHeight) {
      const scrollFraction = scrollY / windowHeight;
      const targetY = -20 + scrollFraction * 60;
      if (textMesh) {
        textMesh.position.y = targetY;
      }
    } else {
      if (textMesh) {
        textMesh.position.y = 50;
      }
    }
  });

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}, 5000);
