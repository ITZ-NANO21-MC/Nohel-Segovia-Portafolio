'use server';
/**
 * @fileOverview An AI-powered code suggestion agent for the NanoEditor v3.2 project.
 *
 * - getCodeSuggestion - A function that handles the code suggestion process.
 * - GetCodeSuggestionInput - The input type for the getCodeSuggestion function.
 * - GetCodeSuggestionOutput - The return type for the getCodeSuggestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetCodeSuggestionInputSchema = z.object({
  currentCode: z
    .string()
    .describe('The current code in the editor.'),
  userTask: z.string().describe('The task the user wants to achieve with the code.'),
});
export type GetCodeSuggestionInput = z.infer<typeof GetCodeSuggestionInputSchema>;

const GetCodeSuggestionOutputSchema = z.object({
  suggestedCode: z.string().describe('The AI-powered code suggestion.'),
  explanation: z.string().describe('An explanation of the suggested code.'),
});
export type GetCodeSuggestionOutput = z.infer<typeof GetCodeSuggestionOutputSchema>;

export async function getCodeSuggestion(input: GetCodeSuggestionInput): Promise<GetCodeSuggestionOutput> {
  return getCodeSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getCodeSuggestionPrompt',
  input: {schema: GetCodeSuggestionInputSchema},
  output: {schema: GetCodeSuggestionOutputSchema},
  prompt: `You are an AI code assistant that helps users write code. You will receive the current code in the editor, and the task the user wants to achieve. You will then provide a code suggestion that helps the user achieve their task.

Current code:
{{currentCode}}

User task:
{{userTask}}

Make sure to explain the suggested code.

Here's the suggested code:
`,
});

const getCodeSuggestionFlow = ai.defineFlow(
  {
    name: 'getCodeSuggestionFlow',
    inputSchema: GetCodeSuggestionInputSchema,
    outputSchema: GetCodeSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
