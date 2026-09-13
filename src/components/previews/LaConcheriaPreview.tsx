import { colors, fonts } from "@/lib/theme";

export default function LaConcheriaPreview() {
  return (
    <div style={{ width:"100%", height:"100%", background:"#faf5ef", display:"flex", flexDirection:"column" }}>
      <div style={{ height:46, background:"white", borderBottom:"1px solid rgba(0,0,0,0.07)", display:"flex", alignItems:"center", padding:"0 20px", gap:20, flexShrink:0 }}>
        <div style={{ fontFamily:fonts.display, fontStyle:"italic", fontSize:18, color:"#3a1a0a" }}>
          La Concheria
        </div>

        <div style={{ flex:1 }} />

        {["Menu","Shop","Our Story","Contact"].map(l => (
          <span key={l} style={{ fontFamily:fonts.sans, fontSize:11.5, color:"#777" }}>
            {l}
          </span>
        ))}

        <div style={{
          background:colors.projects.laConcheria,
          borderRadius:2,
          padding:"4px 12px",
          fontFamily:fonts.sans,
          fontSize:11,
          fontWeight:600,
          color:"white"
        }}>
          Shop
        </div>
      </div>

      <div style={{
        flex:1,
        background:"linear-gradient(155deg, #e8d5c0 0%, #c9976a 52%, #a05030 100%)",
        position:"relative",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        overflow:"hidden"
      }}>
        <div style={{
          position:"absolute",
          inset:0,
          background:"linear-gradient(to bottom, transparent 30%, rgba(50,15,0,0.4) 100%)"
        }} />

        <div style={{ position:"relative", textAlign:"center" }}>
          <div style={{
            fontFamily:fonts.mono,
            fontSize:9,
            color:"rgba(255,255,255,0.55)",
            letterSpacing:"0.16em",
            marginBottom:12
          }}>
            ARTISANAL SEAFOOD · SPAIN
          </div>

          <div style={{
            fontFamily:fonts.display,
            fontStyle:"italic",
            fontSize:38,
            color:"white",
            lineHeight:1.0,
            textShadow:"0 4px 16px rgba(0,0,0,0.3)",
            marginBottom:10
          }}>
            Fresh from<br/>the Sea
          </div>

          <div style={{
            fontFamily:fonts.sans,
            fontSize:12,
            color:"rgba(255,255,255,0.72)",
            marginBottom:18
          }}>
            Premium seafood, sustainably sourced
          </div>

          <div style={{ display:"inline-flex", gap:10 }}>
            <div style={{
              border:"2px solid rgba(255,255,255,0.8)",
              borderRadius:2,
              padding:"7px 20px",
              fontFamily:fonts.sans,
              fontSize:11,
              fontWeight:700,
              color:"white",
              letterSpacing:"0.06em"
            }}>
              SHOP NOW
            </div>

            <div style={{
              background:"rgba(255,255,255,0.15)",
              borderRadius:2,
              padding:"7px 20px",
              fontFamily:fonts.sans,
              fontSize:11,
              color:"rgba(255,255,255,0.85)"
            }}>
              OUR STORY
            </div>
          </div>
        </div>
      </div>

      <div style={{
        background:"white",
        padding:"12px 16px",
        display:"flex",
        gap:8,
        flexShrink:0
      }}>
        {[
          ["Gambas al Ajillo","€18.50","#e9d5c2"],
          ["Pulpo Gallego","€24.00","#d4c0b0"],
          ["Mejillones","€12.00","#c8a898"]
        ].map(([name,price,bg]) => (
          <div
            key={name as string}
            style={{
              flex:1,
              background:bg as string,
              borderRadius:3,
              padding:"8px 10px",
              cursor:"pointer"
            }}
          >
            <div style={{
              fontFamily:fonts.display,
              fontStyle:"italic",
              fontSize:13,
              color:"#3a1a0a",
              marginBottom:2
            }}>
              {name as string}
            </div>

            <div style={{
              fontFamily:fonts.mono,
              fontSize:11,
              color:colors.projects.laConcheria,
              fontWeight:700
            }}>
              {price as string}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}