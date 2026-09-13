import { colors, fonts } from "@/lib/theme";

export default function PianoTeacherLinkPreview() {
  return (
    <div style={{
      width:"100%",
      height:"100%",
      background:"#f2f0fa",
      display:"flex",
      flexDirection:"column"
    }}>
      <div style={{
        height:46,
        background:"white",
        borderBottom:"1px solid rgba(0,0,0,0.07)",
        display:"flex",
        alignItems:"center",
        padding:"0 18px",
        flexShrink:0
      }}>
        <div style={{
          fontFamily:fonts.sans,
          fontWeight:800,
          fontSize:14,
          color:colors.projects.pianoTeacherLink,
          letterSpacing:"-0.02em"
        }}>
          PianoTeacherLink
        </div>

        <div style={{ flex:1 }} />

        {["Find a Teacher","How it Works","For Teachers"].map(l => (
          <span
            key={l}
            style={{
              fontFamily:fonts.sans,
              fontSize:11.5,
              color:"#777",
              marginLeft:16
            }}
          >
            {l}
          </span>
        ))}

        <div style={{
          marginLeft:16,
          background:colors.projects.pianoTeacherLink,
          borderRadius:3,
          padding:"5px 14px",
          fontFamily:fonts.sans,
          fontSize:11,
          fontWeight:600,
          color:"white"
        }}>
          Sign Up
        </div>
      </div>

      <div style={{
        padding:"16px 20px",
        background:"linear-gradient(135deg, #e8e4f8 0%, #d8d0f0 100%)",
        flexShrink:0
      }}>
        <div style={{
          fontFamily:fonts.display,
          fontStyle:"italic",
          fontSize:22,
          color:"#2a1a6a",
          marginBottom:10
        }}>
          Find your perfect piano teacher
        </div>

        <div style={{ display:"flex", gap:6 }}>
          <div style={{
            flex:1,
            background:"white",
            border:"1px solid #d0c8f0",
            borderRadius:3,
            padding:"7px 12px",
            fontFamily:fonts.sans,
            fontSize:11.5,
            color:"#aaa"
          }}>
            📍 City or ZIP...
          </div>

          <div style={{
            background:"white",
            border:"1px solid #d0c8f0",
            borderRadius:3,
            padding:"7px 12px",
            fontFamily:fonts.sans,
            fontSize:11.5,
            color:"#aaa"
          }}>
            Level ▾
          </div>

          <div style={{
            background:colors.projects.pianoTeacherLink,
            borderRadius:3,
            padding:"7px 18px",
            fontFamily:fonts.sans,
            fontSize:11.5,
            fontWeight:600,
            color:"white"
          }}>
            Search
          </div>
        </div>
      </div>

      <div style={{
        flex:1,
        padding:"12px 18px",
        overflow:"hidden"
      }}>
        <div style={{
          fontFamily:fonts.mono,
          fontSize:9,
          color:colors.projects.pianoTeacherLink,
          letterSpacing:"0.1em",
          marginBottom:10
        }}>
          12 TEACHERS NEAR YOU
        </div>

        <div style={{
          display:"flex",
          flexDirection:"column",
          gap:7
        }}>
          {[
            ["Sarah M.","Classical · Jazz · All levels","$45/hr","#c8b4f0","★ 4.9"],
            ["James L.","Contemporary · Pop","$40/hr","#b4a0e8","★ 4.7"],
            ["Mei W.","Classical · Theory","$55/hr","#d4c4f8","★ 5.0"],
            ["Carlos R.","Jazz · Improv","$50/hr","#bfaff0","★ 4.8"],
          ].map(([n,s,p,c]) => (
            <div
              key={n as string}
              style={{
                background:"white",
                borderRadius:4,
                padding:"9px 12px",
                display:"flex",
                alignItems:"center",
                gap:10,
                border:"1px solid rgba(74,63,154,0.1)",
                cursor:"pointer"
              }}
            >
              <div style={{
                width:32,
                height:32,
                borderRadius:"50%",
                background:`linear-gradient(135deg, ${c} 0%, #5a40c0 100%)`,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontFamily:fonts.display,
                fontStyle:"italic",
                fontSize:14,
                color:"white",
                flexShrink:0
              }}>
                {(n as string).charAt(0)}
              </div>

              <div style={{ flex:1, minWidth:0 }}>
                <div style={{
                  fontFamily:fonts.sans,
                  fontWeight:700,
                  fontSize:12.5,
                  color:"#2a1a6a"
                }}>
                  {n as string}
                </div>

                <div style={{
                  fontFamily:fonts.sans,
                  fontSize:11,
                  color:"#999"
                }}>
                  {s as string}
                </div>
              </div>

              <div style={{
                fontFamily:fonts.mono,
                fontSize:12,
                color:colors.projects.pianoTeacherLink,
                fontWeight:700
              }}>
                {p as string}
              </div>

              <div style={{
                background:colors.projects.pianoTeacherLink,
                borderRadius:2,
                padding:"4px 10px",
                fontFamily:fonts.sans,
                fontSize:10.5,
                fontWeight:600,
                color:"white"
              }}>
                Book
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}