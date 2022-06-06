import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { LilAnchorEvent } from "../target/types/lil_anchor_event";

describe("lil-anchor-event", () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.LilAnchorEvent as Program<LilAnchorEvent>;

  it("Is initialized!", async () => {
    let listenerOne;
    let [eventOne, slotOne] = await new Promise((resolve, _reject) => {
      console.log("ok add executor fren")
      listenerOne = program.addEventListener("LilEvent", (event, slot) => {
        console.log("blah blah")
        resolve([event, slot]);
      });
      program.methods.initialize().rpc();
    });

    await program.removeEventListener(listenerOne);
    console.log("eventOne ", eventOne)
    console.log("slotOne ", slotOne)
  });
});
