"use client";
 
import { UploadButton } from "@/lib/utils/uploadthing";
 
export default function UploadPrayers() {
  return (
    <main className="flex flex-col items-center justify-between md:p-24 p-8 text-center">
      <p className="text-white font-bold">upload some prayers files to add to our timeline
</p>
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}