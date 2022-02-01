export interface MajorCredits {
	credits: number;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	const sum = subject1.credits + subject2.credits
	return { credits: sum } as MajorCredits;
}

export interface MinorCredits {
	credits: number;
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	let sum = subject1.credits + subject2.credits
	return { credits: sum } as MinorCredits
}
