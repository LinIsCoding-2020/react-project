import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
 import styled from "styled-components";
 import Nav from "./components/Nav";

const Wrapper = styled.div`
  border: solid 1px red;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.div`
  border: 1px solid blue;
  flex-grow: 1;
  overflow:auto;
`

function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
                    <Switch>
                        <Route path="/tags">
                            <Tags />
                        </Route>
                        <Route path="/money">
                            <Money />
                        </Route>
                        <Route path="/statistics">
                            <Statistics />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                        <Redirect exact from="/" to="tags" />
                    </Switch>
                </Main>
                <Nav />
            </Wrapper>
        </Router>
    );
}

function Tags() {
    return <h2>标签页面</h2>;
}

function Money() {
    return <h2>记账页面</h2>;
}

function Statistics() {
    return <h2>统计页面</h2>;
}

function NoMatch() {
    return <h2>未找到输入地址，请确认后重新访问</h2>;
}




export default App;
