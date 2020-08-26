import { render } from "../test-utils";
import fetchMock from "jest-fetch-mock";

const { findByText } = render();
beforeEach(() => {
  fetchMock.doMock();
});

describe("App", () => {
  test("sidebar opens and displays title on initial load", async () => {
    const titleElement = await findByText(/Berliner Erfrischungskarte/i);
    expect(titleElement).toBeVisible();
  });
});
