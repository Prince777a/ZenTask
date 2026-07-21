import { motion } from "framer-motion"
import { useState } from "react"

function Tabs() {
  const [active, setActive] = useState("Home")
  const tabs = ["Home", "About", "Contact"]

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      {tabs.map((tab) => (
        <div key={tab} onClick={() => setActive(tab)} style={{ position: "relative", cursor: "pointer" }}>
          
          {tab}

          {active === tab && (
            <motion.div 
              layoutId="underline"     // 👈 THIS is the magic show underline wala concept.
              style={{
                position: "relative",
                bottom: -4,
                // left: 0,
                // width: "100%",
                height: "2px",
                background: "blue"
              }}
            />
          )}

        </div>
      ))}
    </div>
  )
}
export default Tabs;