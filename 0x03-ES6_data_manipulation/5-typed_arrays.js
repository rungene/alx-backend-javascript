export default function(length, position, value) {
  const buffer = new ArrayBuffer(length);

  const dataView = new DataView(buffer);
  if (position >= 0 && position < buffer.byteLength) {
    dataView.setInt8(position, value);
  } else {
    console.error('Position outside range');  
  }

  return buffer;
}
