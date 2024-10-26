/** @format */

import supabase, { supabaseUrl } from "./supabase";

//GET CABINS INFORMATION FROM SUPABASE
//***********SELECT CABINS***********
export async function getCabins() {
  //query the supabase client
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded ");
  }
  //if there is no error
  return data;
}

//***********ADD CABINS***********
export async function createEditCabin(newCabin, id) {
  // check what kind of images is uploaded

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  //create url containing the path to the bucket itself and a unique cabin name
  // IMAGE NAME
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // IMAGE PATH
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1.Create/Edit the cabin
  let query = supabase.from("cabins");

  //a)CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //b)EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id); //eq : we dont want to update everything exept id is equal the id we passed in

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }

  // 2.Upload image

  // if image already have been uploaded ew shouldnt upload anything
  if (hasImagePath) return data;

  //REFRENCE: https://supabase.com/docs/reference/javascript/storage-from-upload

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

//***********DLETE CABINS***********
export async function deleteCabin(id) {
  //take our supabase client and selet the cabins table and will delete from there(code from api docs)
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
  //if there is no error
  return data;
}
