const context = require("../../../context");
const plugin = require("../main");
const { expect } = require("chai");

function search(args = {}) {
  return plugin({
    ...context,
    actorName: "Zoe Bloom",
    args,
  });
}

describe("freeones", () => {
  it("Search 'Zoe Bloom'", async () => {
    const result = await search({
      dry: false,
      blacklist: [],
      useImperial: false,
      useAvatarAsThumbnail: false,
    });
    expect(result.custom).to.deep.equal({
      "hair color": "Brown",
      "eye color": "Green",
      ethnicity: "Caucasian",
      height: 157,
      weight: 50,
      birthplace: "Pittsburgh, PA",
      zodiac: "Aries",
      measurements: "32A-24-35",
      "waist size": 24,
      "hip size": 35,
      "cup size": "A",
      "bra size": "32A",
      "bust size": 32,
      gender: "Female",
      sex: "Female",
    });
    expect(result.nationality).to.equal("US");
    expect(result.bornOn).to.be.a("number");
    expect(result.labels).to.have.length.greaterThan(0);
    expect(result.labels).to.contain("Brown Hair");
    expect(result.labels).to.contain("Green Eyes");
    expect(result.labels).to.contain("Caucasian");
    expect(result.labels).to.contain("Female");
    expect(result.labels).to.contain("Piercings");
    expect(result.labels).to.contain("Tattoos");
  });

  it("Search 'Zoe Bloom' but without measurements", async () => {
    console.log("Fetching freeones.com...");
    const result = await search({
      dry: false,
      blacklist: ["measurements"],
      useImperial: false,
      useAvatarAsThumbnail: false,
    });
    expect(result.custom).to.deep.equal({
      "hair color": "Brown",
      "eye color": "Green",
      ethnicity: "Caucasian",
      height: 157,
      weight: 50,
      birthplace: "Pittsburgh, PA",
      zodiac: "Aries",
      gender: "Female",
      sex: "Female",
    });
    expect(result.nationality).to.equal("US");
    expect(result.bornOn).to.be.a("number");
    expect(result.labels).to.have.length.greaterThan(0);
    expect(result.labels).to.contain("Brown Hair");
    expect(result.labels).to.contain("Green Eyes");
    expect(result.labels).to.contain("Caucasian");
    expect(result.labels).to.contain("Female");
    expect(result.labels).to.contain("Piercings");
    expect(result.labels).to.contain("Tattoos");
  });
});
