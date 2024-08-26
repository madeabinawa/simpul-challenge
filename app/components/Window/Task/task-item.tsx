import { useToggle } from "@mantine/hooks"
import { useRef } from "react"

function Accordion() {
  const [active, setActive] = useToggle()
  const contentRefs = useRef<HTMLDivElement | undefined>()

  return (
    <div className="w-full">
      <div className="border-b">
        <button
          onClick={() => setActive()}
          className="w-full text-left py-4 px-6 font-semibold text-lg bg-gray-100 hover:bg-gray-200 focus:outline-none">
          Accordion Item 1
        </button>
        <div
          ref={(el) => {
            if (el) contentRefs.current = el
          }}
          style={{
            height: active ? contentRefs.current?.scrollHeight : 0,
            transition: "height 300ms ease, opacity 300ms ease",
            opacity: active ? 1 : 0,
            overflow: "hidden"
          }}>
          <div className="px-6 py-4 bg-white">
            <p className="text-gray-700">Content for accordion item 1.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
