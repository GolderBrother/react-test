import { removeNode, addEventListener } from "../src/domUtil";
describe("测试dom api", () => {
  test("测试removeChild", () => {
    document.body.innerHTML = `
            <div id='parent'>
                <div id='child'>Child</div>
            </div>
        `;
    const parent = document.getElementById("parent");
    const child: Element | null = document.getElementById("child");
    expect(parent.nodeName.toLowerCase()).toBe("div");
    expect(child.nodeName.toLowerCase()).toBe("div");
    removeNode(child);
    expect(document.getElementById("child")).toBeNull();
  });

  test("测试eventListener", () => {
    document.body.innerHTML = `
          <div id="parent">
            <button id="clickMe">click</button>
          </div>
        `;
    const clickMe = document.getElementById("clickMe");
    addEventListener(clickMe, "click", () => {
      if (clickMe) clickMe.innerHTML = "clicked";
    });
    clickMe && clickMe.click();
    expect(clickMe.innerHTML).toBe("clicked");
  });
});
