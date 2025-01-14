import { PropriedadeInterface, PropriedadeInterfaceWithId } from "@/models/propriedades";
import { getMongoCollection } from "./mongodb";
import { ObjectId } from "mongodb";

const col = "propriedades";
const db = "liberdade";

export async function InsertPropriedade(
  obj: PropriedadeInterface
): Promise<string> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}

export async function FindPropriedades(): Promise<PropriedadeInterfaceWithId[]> {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find({}).toArray();

  return result;
}

export async function FindPropriedadeById(
  id: string
): Promise<PropriedadeInterface> {
  const newId = new ObjectId(id);

  const collection = await getMongoCollection(db, col);
  const result = await collection.findOne({ _id: newId });
  return result;
}

export async function RemovePropriedade(id: string): Promise<void> {
  const newId = new ObjectId(id);

  const collection = await getMongoCollection(db, col);
  await collection.deleteOne({ _id: newId });
}

export async function ChangePropriedade(id: string, body: PropriedadeInterface) {
  const newId = new ObjectId(id);

  const collection = await getMongoCollection(db, col);
  const result = await collection.updateOne({ _id: newId }, {$set: body});
  return result;
}
