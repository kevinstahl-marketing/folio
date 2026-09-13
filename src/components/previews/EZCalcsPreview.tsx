import { colors, fonts } from "@/lib/theme"
// ─── EZCalcs app mockup ───────────────────────────────────────────────────────

export default function EZCalcsPreview() {
  return (
    <div style={{ width:"100%", height:"100%", display:"flex", flexDirection:"column", background:"white" }}>
  <div style={{ height:44, background:"#12225a", display:"flex", alignItems:"center", padding:"0 18px", gap:12, flexShrink:0 }}>
    <span style={{ fontFamily:fonts.display, fontStyle:"italic", fontSize:20, color:"white", letterSpacing:"-0.02em" }}>
      EZCalcs
    </span>

    <span style={{ fontFamily:fonts.mono, fontSize:8, color:"rgba(255,255,255,0.3)", letterSpacing:"0.08em" }}>
      STRUCTURAL ENGINEERING
    </span>

    <div style={{ flex:1 }} />

    <div style={{
      background:"rgba(255,255,255,0.12)",
      border:"1px solid rgba(255,255,255,0.2)",
      borderRadius:3,
      padding:"4px 10px",
      fontFamily:fonts.sans,
      fontSize:11,
      color:"rgba(255,255,255,0.7)",
      cursor:"pointer"
    }}>
      + New
    </div>

    <div style={{
      width:28,
      height:28,
      borderRadius:"50%",
      background:colors.projects.ezcalcs,
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      fontFamily:fonts.sans,
      fontSize:11,
      fontWeight:700,
      color:"white"
    }}>
      KS
    </div>
  </div>

  <div style={{ display:"flex", flex:1, overflow:"hidden", minHeight:0 }}>
    <div style={{
      width:150,
      background:"#f2f5fc",
      borderRight:"1px solid rgba(58,94,200,0.1)",
      padding:"12px 0",
      flexShrink:0,
      overflow:"hidden"
    }}>
      <div style={{
        fontFamily:fonts.mono,
        fontSize:8.5,
        color:colors.projects.ezcalcs,
        letterSpacing:"0.1em",
        padding:"0 12px",
        marginBottom:8
      }}>
        FORMULAS
      </div>

      <div style={{
        padding:"5px 12px",
        fontFamily:fonts.sans,
        fontSize:12,
        color:colors.projects.ezcalcs,
        fontWeight:600,
        display:"flex",
        gap:4
      }}>
        ▾ Beams
      </div>

      {[
        ["Moment Capacity", true],
        ["Shear Force", false],
        ["Deflection", false]
      ].map(([lbl, active]) => (
        <div
          key={lbl as string}
          style={{
            padding:"4px 12px 4px 24px",
            fontFamily:fonts.sans,
            fontSize:11.5,
            color:active ? colors.projects.ezcalcs : "#666",
            fontWeight:active ? 600 : 400,
            background:active ? "rgba(58,94,200,0.1)" : "transparent",
            borderLeft:active
              ? `2px solid ${colors.projects.ezcalcs}`
              : "2px solid transparent"
          }}
        >
          {lbl as string}
        </div>
      ))}

      {["Columns", "Slabs"].map(g => (
        <div
          key={g}
          style={{
            padding:"5px 12px",
            fontFamily:fonts.sans,
            fontSize:12,
            color:"#555",
            display:"flex",
            gap:4
          }}
        >
          ▸ {g}
        </div>
      ))}

      <div style={{
        margin:"10px 12px",
        height:1,
        background:"rgba(58,94,200,0.1)"
      }} />

      <div style={{
        fontFamily:fonts.mono,
        fontSize:8.5,
        color:colors.projects.ezcalcs,
        letterSpacing:"0.1em",
        padding:"0 12px",
        marginBottom:6
      }}>
        TEMPLATES
      </div>

      {["Bridge Beams", "Column Set A"].map(t => (
        <div
          key={t}
          style={{
            padding:"4px 12px",
            fontFamily:fonts.sans,
            fontSize:11.5,
            color:"#777"
          }}
        >
          {t}
        </div>
      ))}
    </div>

    <div style={{
      flex:1,
      background:"white",
      padding:"14px 20px",
      overflow:"hidden",
      minWidth:0
    }}>
      <div style={{
        fontFamily:fonts.mono,
        fontSize:9,
        color:"#bbb",
        marginBottom:10
      }}>
        Beams / Moment Capacity
      </div>

      <div style={{ display:"flex", alignItems:"center", marginBottom:16 }}>
        <span style={{
          fontFamily:fonts.sans,
          fontWeight:700,
          fontSize:16,
          color:colors.ink
        }}>
          Moment Capacity
        </span>

        <div style={{ flex:1 }} />

        <div style={{
          background:colors.projects.ezcalcs,
          borderRadius:3,
          padding:"5px 14px",
          fontFamily:fonts.sans,
          fontSize:12,
          fontWeight:600,
          color:"white",
          cursor:"pointer"
        }}>
          ▷ Calculate
        </div>
      </div>

      <div style={{
        fontFamily:fonts.mono,
        fontSize:8.5,
        color:colors.projects.ezcalcs,
        letterSpacing:"0.1em",
        marginBottom:8
      }}>
        VARIABLES
      </div>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:8,
        marginBottom:14
      }}>
        {[
          ["b", "350", "mm"],
          ["d", "560", "mm"],
          ["fy", "420", "MPa"]
        ].map(([name, val, unit]) => (
          <div
            key={name}
            style={{
              border:"1px solid rgba(58,94,200,0.18)",
              borderRadius:4,
              padding:"7px 10px",
              background:"#fafbff"
            }}
          >
            <div style={{
              fontFamily:fonts.mono,
              fontSize:8,
              color:"#999",
              marginBottom:2
            }}>
              {name}
            </div>

            <div style={{
              fontFamily:fonts.mono,
              fontSize:15,
              color:colors.ink,
              fontWeight:500
            }}>
              {val}{" "}
              <span style={{ fontSize:9, color:"#999" }}>
                {unit}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        background:"#f8f9ff",
        border:"1px solid rgba(58,94,200,0.14)",
        borderRadius:4,
        padding:"10px 14px",
        marginBottom:14,
        fontFamily:fonts.mono,
        fontSize:13,
        color:colors.ink
      }}>
        M<sub style={{ fontSize:9 }}>n</sub> = A
        <sub style={{ fontSize:9 }}>s</sub> · f
        <sub style={{ fontSize:9 }}>y</sub> · (d – a/2)
      </div>

      <div style={{ display:"flex", alignItems:"center", gap:14 }}>
        <div style={{
          background:"rgba(58,94,200,0.05)",
          border:"2px solid rgba(58,94,200,0.3)",
          borderRadius:4,
          padding:"8px 16px"
        }}>
          <span style={{
            fontFamily:fonts.mono,
            fontSize:20,
            color:colors.ink,
            fontWeight:500
          }}>
            124.8{" "}
          </span>

          <span style={{
            fontFamily:fonts.mono,
            fontSize:10,
            color:"#888"
          }}>
            kN·m
          </span>
        </div>

        <div style={{
          fontFamily:fonts.sans,
          fontSize:13,
          color:"#4caf50",
          fontWeight:600
        }}>
          ✓ Saved
        </div>
      </div>
    </div>
  </div>
</div>
  );
}