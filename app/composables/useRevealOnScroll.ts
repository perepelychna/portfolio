import { onMounted, onUnmounted } from 'vue'

export function useRevealOnScroll(root?: HTMLElement | null) {
  let observer: IntersectionObserver | null = null

  function observeElements() {
    if (!observer) {
      return
    }

    const scope = root ?? document
    scope.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => {
      observer?.observe(element)
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observeElements()
  })

  onUnmounted(() => {
    observer?.disconnect()
    observer = null
  })

  return { observeElements }
}
