import {
  Cmd,
  HeroContainer,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
  ____           _                __     __    _ _      
 / ___|_   _ ___| |_ __ ___   ____\\ \\   / /_ _| | | ___ 
| |  _| | | / __| __/ _\` \\ \\ / / _ \\ \\ / / _\` | | |/ _ \\
| |_| | |_| \\__ \\ || (_| |\\ V / (_) \\ V / (_| | | |  __/
 \\____|\\__,_|___/\\__\\__,_| \\_/ \\___/ \\_/ \\__,_|_|_|\\___|
                                       
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

  ____           _                __  
 / ___|_   _ ___| |_ __ ___   ____\\ \
| |  _| | | / __| __/ _\` \\ \\ / / _ 
| |_| | |_| \\__ \\ || (_| |\\ V / (_) \\
 \\____|\\__,_|___/\\__\\__,_| \\_/ \\___
  __     __    _ _      
\\ \\   / /_ _| | | ___ 
/ _ \\ \\ / / _\` | | |/ _ \\
/ (_) \\ V / (_| | | |  __/
_/ \\___/ \\_/ \\__,_|_|_|\\___|
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          Welcome to my terminal portfolio (as a real back-end developer)
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                  .:.-.-+*....               
                .=@%@%@@@@%:#..              
                -.@@@@@@@@@@@@*.             
                =@@@.....:.=@@@.             
                 @:...........@%             
                :%............::             
                @@@@@@@%%@@@@@#@             
               .%..@@@@%@=#@=-.@             
               .@+.......@....-@.            
               .-=#@@@@@@@-@%:-..            
                .#=@@+@@@@#@@+-.             
                .--.-+....-.:..              
                 #%..*@@@%..::               
               .#.#@:......@@                
           .....*:-=%@@@@@@-%+               
      .......=+:@==+===------:=..            
  ...=....:-.=--*@+==+++==+#=.@......        
.......-...:.==-:=@@#**#++*#=.@...-:...      
....-..:.-.:.--====##++*++=:..*.:=..:...     
..#..-..:-.......==+#--==--.-%=.:=-==.=..    
...=.::...=..:-====++##+====#%:-.--=====..   
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
