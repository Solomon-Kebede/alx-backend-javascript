export default function guardrail(mathFunction) {
  let queue;
  try {
    const result = mathFunction();
    queue = [result, 'Guardrail was processed'];
    return queue;
  } catch (err) {
    queue = [`${err}`, 'Guardrail was processed'];
    return queue;
  }
}
