import { Link } from "gatsby";
import React from "react";

function TestSpacePage() {
    return (
        <main>
            <header style={{ display: "flex" }}>
                <Link to="/" style={{ padding: 10 }}>로고</Link>
                <div style={{ flexGrow: 1 }}></div>
                <Link to="/test" style={{ padding: 10 }}>어바웃</Link>
                <Link to="/test" style={{ padding: 10 }}>테스트</Link>
                <Link to="/test-space" style={{ padding: 10 }}>테스트 스페이스</Link>
            </header>
        </main>
    );
}

export default TestSpacePage;