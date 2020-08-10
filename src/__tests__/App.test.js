import { render } from "../test-utils";

const { findByText } = render();

describe("App", () => {
  test("sidebar opens and displays title on initial load", async () => {
    const titleElement = await findByText(/Berliner Erfrischungskarte/i);
    expect(titleElement).toBeVisible();
  });
});
