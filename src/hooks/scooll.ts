import { ref, onMounted, onUnmounted, Ref } from 'vue';

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersection(element: Ref<null | Element>, options: IntersectionOptions = {}) {
  const isIntersecting = ref(false);
  let observer: IntersectionObserver | null = null;

  const stopObserving = () => {
    if (observer && element.value) {
      observer.unobserve(element.value);
      observer.disconnect();
      observer = null;
    }
  };

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        
        isIntersecting.value = entry.isIntersecting;
        if (entry.isIntersecting) {
          // 当组件出现在视窗中时触发的逻辑
          // console.log('组件出现在视窗中');
        } else {
          // 当组件离开视窗时触发的逻辑
          // console.log('组件离开视窗');
        }
      });
    }, options);

    if (element.value) {
      observer.observe(element.value);
    }
  });

  onUnmounted(() => {
    stopObserving();
  });

  return {
    isIntersecting,
    stopObserving,
  };
}