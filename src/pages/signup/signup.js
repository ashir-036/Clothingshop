import "../../styles/Signup.css";
export function SignUp() {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#eee",
    height: "100vh", // Use quotes for values containing units like 'vh'
  };
  return (
    <>
      <body>
        <div class="bold-line"></div>
        <div class="container" style={style}>
          <div class="window">
            <div class="overlay"></div>
            <div class="content">
              <div class="welcome">Hi There!</div>
              <div class="subtitle">Welcome To The AJ Family!.</div>
              <div class="input-fields" action="/sign_up" method="post">
                <form action="/sign_up" method="post">
                  <input
                    type="text"
                    placeholder="Username"
                    name="name"
                    id="name"
                    class="input-line full-width"
                    required
                  ></input>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    class="input-line full-width"
                    required
                  ></input>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    class="input-line full-width"
                    required
                  ></input>
                </form>
              </div>
              <div>
                <button class="ghost-round full-width">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
