import "./shinyText.css";


export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black',
      color: 'white',
    }}>
      <h1>
        <ShinyText text="IKKA.TECH" disabled={false} speed={5} className="" />
      </h1>
    </div>
  );
}
const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: { text: string, disabled: boolean, speed: number, className: string }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`} style={{ animationDuration, 
      fontWeight: 300,
     }}>
      {text}
    </div>
  );
};

