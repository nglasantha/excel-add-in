/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/**
 * Get value for key
 * @customfunction
 * @param key The key
 * @returns The value for the key.
 */
function subs(symbol, fileds) {
  console.error("symbol :" + symbol);
  symbol.split(",").forEach((element) => {
    let instrument = { vendor: "MS", name: element, exchange: "182" };
    if (instrument.exchange === "ALLEX") {
      instrument.type = "AGG";
    }
    let streamItem = {
      dataSource: "QUO",
      subscribeItems: [
        {
          instrument: instrument,
        },
      ],
    };
   return wsModule.sendMessage(streamItem, fileds, "A1");
  });
}


CustomFunctions.associate("SUBS", subs);

