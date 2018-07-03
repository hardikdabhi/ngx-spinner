export interface ISpinnerConfig {
	placement?: SPINNER_PLACEMENT;
	animation?: SPINNER_ANIMATIONS;
	size?: string;
	bgColor?: string;
	color?: string;
	secondaryColor?: string;
	tertiaryColor?: string;
}

export interface ISpinnerAnimation {
	config: ISpinnerConfig;
}

export enum SPINNER_PLACEMENT {
	block_window = "block_window",
	block_ui = "block_ui",
	inplace = "inplace"
}

export enum SPINNER_ANIMATIONS {
	blink,
	fb_card,
	plate_rotate,
	double_bounce,
	folding_cube,
	bars,
	rotating_dots
}

export const DEFAULT_CONFIG: ISpinnerConfig = {
	placement: SPINNER_PLACEMENT.inplace,
	animation: SPINNER_ANIMATIONS.blink,
	size: "2rem",
	bgColor: "rgba(255,255,255,0.8)",
	color: "#e46521",
	secondaryColor: "#1574b3",
	tertiaryColor: "#c31a4f"
};