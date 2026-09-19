import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const features = [
  ["Learn Anything", "Discover new skills from amazing people."],
  ["Teach & Earn Respect", "Share your knowledge and help others grow."],
  ["Build Connections", "Connect, collaborate and grow together."],
];

export default function LoginForm() {
  const { login, userQuery } = useAuthContext();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [show, setShow] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login.mutateAsync(form);
      const { data } = await userQuery.refetch();
      navigate(data?.data?.user?.isOnboarded ? "/dashboard" : "/onboarding");
    } catch {}
  };

  const input = (name, placeholder, type = "text") => (
    <input name={name} type={type === "password" && show ? "text" : type}
      placeholder={placeholder} value={form[name]}
      onChange={(e) => setForm({ ...form, [name]: e.target.value })}
      required style={s.input} />
  );

  return (
    <main style={s.page}>
      <section style={s.left}>
        <img src="/skillswaplogo.png" alt="SkillSwap" style={s.logo} />
        <div style={s.hero}>
          <h1 style={s.heading}>Exchange Skills.<br /><span>Build Opportunities.</span></h1>
          <p style={s.description}>SkillSwap connects learners and teachers around the world to share knowledge, grow together, and achieve more.</p>

          {features.map(([title, text]) => (
            <div style={s.feature} key={title}>
              <b style={s.icon}>+</b>
              <div><strong>{title}</strong><p style={s.featureText}>{text}</p></div>
            </div>
          ))}

          <img src="/heroimage.png" alt="SkillSwap learning" style={s.heroImage} />
        </div>
      </section>

      <section style={s.right}>
        <div style={s.top}><span>English⌄</span><button type="button" style={s.theme}>◐</button></div>

        <form onSubmit={submit} style={s.form}>
          <h2 style={s.title}>Welcome Back!</h2>
          <p style={s.subtitle}>Login to continue your SkillSwap journey.</p>

          <label style={s.label}>Email Address</label>
          {input("email", "Enter your email", "email")}

          <label style={s.label}>Password</label>
          <div style={s.password}>
            {input("password", "Enter your password", "password")}
            <button type="button" onClick={() => setShow(!show)} style={s.show}>
              {show ? "Hide" : "Show"}
            </button>
          </div>

          <div style={s.options}>
            <label><input type="checkbox" /> Remember me</label>
            <span style={s.link}>Forgot Password?</span>
          </div>

          {login.isError && <p style={s.error}>{login.error?.response?.data?.message || "Login failed."}</p>}

          <button disabled={login.isPending} style={s.login}>
            {login.isPending ? "Logging in..." : "Login    →"}
          </button>

          <div style={s.divider}>or continue with</div>
          <button type="button" style={s.social}>Google    Continue with Google</button>
          <button type="button" style={s.social}>GitHub    Continue with GitHub</button>

          <p style={s.signup}>Don't have an account? <span onClick={() => navigate("/register")} style={s.link}>Sign up</span></p>
        </form>

        <div style={s.security}>Your data is secure and encrypted</div>
      </section>
    </main>
  );
}

const s = {
  page:{minHeight:"100vh",display:"flex",fontFamily:"Arial,sans-serif",color:"#101b38"},
  left:{width:"50%",padding:"38px 52px",boxSizing:"border-box",background:"linear-gradient(135deg,#f4efff,#eee9ff)",overflow:"hidden"},
  right:{width:"50%",minHeight:"100vh",position:"relative",padding:"32px 7%",boxSizing:"border-box"},
  logo:{width:150}, hero:{maxWidth:570,margin:"62px auto 0"},
  heading:{fontSize:42,lineHeight:1.15,margin:0}, headingSpan:{color:"#5824d5"},
  description:{maxWidth:500,margin:"25px 0",fontSize:17,lineHeight:1.65,color:"#59657b"},
  feature:{display:"flex",alignItems:"center",gap:18,margin:"19px 0"},
  icon:{width:54,height:54,display:"grid",placeItems:"center",flexShrink:0,borderRadius:12,background:"#fff",color:"#5824d5",fontSize:24,boxShadow:"0 5px 18px rgba(80,50,150,.12)"},
  featureText:{margin:"5px 0 0",color:"#59657b"},
  heroImage:{width:"88%",maxHeight:310,display:"block",margin:"20px auto 0",objectFit:"contain"},
  top:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:20},
  theme:{width:48,height:48,borderRadius:"50%",border:"1px solid #e3e3e8",background:"#fff",color:"#5824d5",cursor:"pointer"},
  form:{maxWidth:580,margin:"66px auto 70px"}, title:{fontSize:36,margin:0},
  subtitle:{color:"#647087",fontSize:17,margin:"12px 0 38px"},
  label:{display:"block",margin:"18px 0 9px",fontWeight:600},
  input:{width:"100%",height:54,boxSizing:"border-box",padding:"0 16px",border:"1px solid #d9dce4",borderRadius:8,outline:"none",fontSize:16},
  password:{position:"relative"}, show:{position:"absolute",right:10,top:8,height:38,border:0,background:"transparent",color:"#687286",cursor:"pointer"},
  options:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"20px 0 28px",fontSize:14},
  link:{color:"#5824d5",cursor:"pointer"},error:{color:"#d32f2f",fontSize:14},
  login:{width:"100%",height:58,border:0,borderRadius:8,background:"linear-gradient(90deg,#5221d4,#7025df)",color:"#fff",fontSize:17,fontWeight:600,cursor:"pointer"},
  divider:{textAlign:"center",margin:"28px 0",color:"#687286",fontSize:14},
  social:{width:"100%",height:52,marginBottom:14,border:"1px solid #dddfe5",borderRadius:8,background:"#fff",fontSize:15,cursor:"pointer"},
  signup:{textAlign:"center",marginTop:28,color:"#303b52"},
  security:{position:"absolute",bottom:0,left:0,right:0,padding:20,textAlign:"center",background:"#fafaff",color:"#687286",fontSize:14}
};