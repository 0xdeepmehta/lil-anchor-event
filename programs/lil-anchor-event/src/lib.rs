use anchor_lang::prelude::*;
declare_id!("B3vh5D4XNab5ZCZntXV42DKSCmifKS1BMVj6WJ733RJr");

#[program]
pub mod lil_anchor_event {
    use super::*;

    pub fn initialize(_ctx: Context<Initialize>) -> Result<()> {
        emit!(LilEvent {
            data: 8,
            lable: "fuck".to_string(),
        });
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}


#[event]
pub struct LilEvent {
    pub data: u64,
    #[index]
    pub lable: String,
}