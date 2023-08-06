import Number from "./Number";

class ExtractItem {
  static getItem(array) {
    let test = Number.getRandomItem(array);
    return test.component;
  }

  static convertToArray(
    whats?,
    teleg?,
    instag?,
    message?,
    clock?,
    face?,
    twitt?,
    notif?
  ) {
    const limit = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    let array = [whats, teleg, instag, message, clock, face, twitt,notif];

    const item = array
      .sort(() => Math.random() - Math.random())
      .slice(0, limit);

    return item;
  }
}

export default ExtractItem;
