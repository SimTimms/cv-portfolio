import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  it("should render a heading 1", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Vite + React"
    );
  });

  describe("logos", () => {
    it("should render a Vite logo", () => {
      render(<App />);
      const img = screen.getByAltText("Vite logo");
      expect(img).toBeInTheDocument();
    });

    it("should render a Vite link", () => {
      const { container } = render(<App />);
      const viteLogo = container.querySelector("a[href='https://vitejs.dev']");
      expect(viteLogo).toBeInTheDocument();
    });

    it("should render a React logo", () => {
      render(<App />);
      const img = screen.getByAltText("React logo");
      expect(img).toBeInTheDocument();
    });

    it("should render a React link", () => {
      const { container } = render(<App />);
      const reactLogo = container.querySelector("a[href='https://react.dev']");
      expect(reactLogo).toBeInTheDocument();
    });
  });

  describe("Card", () => {
    it("should render a card", () => {
      const { container } = render(<App />);
      const card = container.querySelector(".card");
      expect(card).toBeInTheDocument();
    });

    it("should render a button", () => {
      render(<App />);
      expect(screen.getByRole("button")).toHaveTextContent("count is 0");
    });

    it("increments the count when the button is clicked", () => {
      render(<App />);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(screen.getByText("count is 1")).toBeInTheDocument();
    });

    it("should render a paragraph", () => {
      const { container } = render(<App />);
      const paragraph = container.querySelector("p");
      expect(paragraph).toBeInTheDocument();
      expect(paragraph).toHaveTextContent(
        "Edit src/App.tsx and save to test HMR"
      );
    });

    it("should render a code element", () => {
      const { container } = render(<App />);
      const code = container.querySelector("code");
      expect(code).toBeInTheDocument();
      expect(code).toHaveTextContent("src/App.tsx");
    });
  });

  describe("read-the-docs", () => {
    it("should render a paragraph", () => {
      const { container } = render(<App />);
      const paragraph = container.querySelector("p");
      expect(paragraph).toBeInTheDocument();
    });

    it("should render a paragraph with the class 'read-the-docs'", () => {
      const { container } = render(<App />);
      const paragraph = container.querySelector("p.read-the-docs");
      expect(paragraph).toBeInTheDocument();
    });

    it("should render a paragraph with the text 'Click on the Vite and React logos to learn more'", () => {
      render(<App />);
      expect(
        screen.getByText(/Click on the Vite and React logos to learn more/i)
      ).toBeInTheDocument();
    });
  });
});
