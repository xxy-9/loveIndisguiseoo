(() => {
  const get = id => document.getElementById(id);
  const albums = [
    { name: 'You&Me', cover: 'you-me-cover', ids: ["ym4-video-66f2a3e52428733dd85b47ced0babf5b","ym4-video-906bf08c472880f80bca963c9fb14e44","you-me-ym4-b80576a8eb425b42e1b3a2ac1494c6dd","you-me-ym4-bdb7d5033d49955345fb1c312a48fc8b","you-me-ym4-b81ee064e6041f924abace9bd21996a4","you-me-webp-ym4-b9605e22162043f20141bc880fa99977","you-me-webp-ym4-f81fb6330108c64a0741fa3a4fa1ee14","you-me-webp-ym4-bfe3ac5553929626dbee4f1456ad2e88","you-me-webp-ym4-30feddede955b2976842cecbc7c331b2","you-me-webp-ym4-e205cd9ba2f31493c2861be0e06bcce0","you-me-webp-ym4-fe4299ee0df6155feaa2cbe45fdd47d5","you-me-webp-ym4-92876aaa0cd4e8f2c98721e69e6c9ea7","you-me-webp-ym4-3e525028ceb3555f95c9a9e80a6b1d05","you-me-webp-ym4-1a7149e14a173daffb8a9e7b4aebad87","you-me-webp-ym4-3b6198fa01cad81ed7c049364944a78d","you-me-webp-ym4-6d5f1f0ac91786499db5386f5bcaa1de","you-me-webp-ym4-04d6a81f06a4c1d6b972fe55016bb8cb","you-me-webp-ym4-7e6854b84181d522d150c2ee3c27df04","you-me-webp-ym4-6b163b3e73e3e6c5663d0c6907ab5cc7","you-me-webp-ym4-9dcecce04a33ebca44794932c5807b71","you-me-webp-ym4-2be9440c92ee50fb6b59b010db5d5132","you-me-webp-ym4-c3049a87b25d362ff336a07d6aca3690","you-me-webp-ym4-a316c0cd14e706d41122d3e3d8abcccc","you-me-webp-ym4-12394210750fc28f9aada7683b824455","you-me-webp-ym4-280a9706c1f16e191b99120b3bbec88d","you-me-webp-ym4-58cca83c249917911533fb07d804b0f2","you-me-webp-ym4-02625a7fc0559744401993156c3334f9","you-me-webp-ym4-b3fd6d92a98fbade68f5723ff05e10c3","you-me-webp-ym4-04ad2a97345416a9249c249825076070","you-me-webp-ym4-d3dedf75b8404eb78f368e7cea9ea3de","you-me-webp-ym4-7d254a1bd6f88b8864e45788dae72773","you-me-webp-ym4-68f91370e9a5b30fe6a04ef2ac95df91","you-me-webp-ym4-781eebb378be7ae3c8d7ced719791f0c","you-me-webp-ym4-bb2f9bae96eb7dd5884b18903f37852d","you-me-webp-ym4-2a780231f266ac245e48722d25f85750","you-me-webp-ym4-2b63d2c39098f6400228581fac8b6d9b","you-me-webp-ym4-56b24ae1069bbc8667393321c4d6854c","you-me-webp-ym4-4783b75b9ac586ab689b07a1cf2b80de","you-me-webp-ym4-2feae9d773509da0dfc5988a7b225e54","you-me-webp-ym4-f2cdb506e85307b4029384be3a93e66d","you-me-webp-ym4-a43761a533ffc1312aaf384b8c064a9b","you-me-webp-ym4-7b8510b4e79329560d9297614740d223","you-me-webp-ym4-1b14ad77bad6ce88bbb4afd08e95656c","you-me-webp-ym5-e70b6e039c77e29d90c119db7bc68446","you-me-webp-ym5-cffe5983e4aee096211c1eeb13d2f8c5","you-me-webp-ym5-34075833b7a9544689618bde9513ca81","you-me-webp-ym5-299d55aaf3e5c0764ead5c9b4b4e4c3e","you-me-webp-ym5-6ba387552c6c8be7334f7d2592efbebe","you-me-webp-ym5-a7f576d649d1bbbbf105d016bf3b5e4f","you-me-cake","ym2-05d15a328e822615b9e3546f60da0671","ym2-0d39facb252ae0e593c21600d9c29cff","ym2-3d9afbd6ee6d0586fedca748c14e413d","ym2-4564fada8a8f3b44e45a7a12691a1676","ym2-480e8e75b4f1fec6e2610e1c51fa2963","ym2-5465813bb1fe0c4b732f43e3f54c610e","ym2-55032b5b39a30ba8b4628be38e65fa6f","ym2-5569a937e7fa5ca8e6c5cae4dabbc3fe","ym2-5c0f5a1b400b09687e0314c36df05b44","ym2-5c9cf4f34210129b4b5c3b1a0f67f8dd","ym2-86305d2a74bd646b088c0bf731b51250","ym2-874db776e6069c3923bf51341acb3161","ym2-96328fccbfa00afdba38f1338203d17d","ym2-9a1b9d642d3f33680e22606880ff4a0d","ym2-9e98e7706988bcb4f149b7c5adafcf23","ym2-bd8afd425aca3c91cf2f29293b3b8742","ym2-de8334f802b1965602116313b2c68bf3","1-1","1-2","1-3","ym3-0655d8f6fb334c318d6868409f2fa6e5","ym3-0b5c30ba15546f414b75632b9d33a333","ym3-0fdfbad3dc0c23d4ecee2161ba4e9fee","ym3-10fc45533046161eed49f30a7882eea0","ym3-110c08dd363fbd94fdef4d5cb947ec8e","ym3-1516958c0070be5be5efb015251b2909","ym3-1eca8bf80119ff316a355a7f7a5b8414","ym3-22a87190ad8fed049b029715781e16cc","ym3-2edcde21a3392628296878146c5ba6fe","ym3-2f11935eab869127992582ef54b67ed0","ym3-375c14a7bdb6c2bb90850ac5f32f1a2d","ym3-3b9c662db5ea5a0099fa5ddf45476a07","ym3-415a07af1b94ca545e9cb25dd8fa2ea2","ym3-43b01dece7373fe6bfb5c97cd620d0d4","ym3-43b27c73636c04b3da63a7c361330650","ym3-45ad5aa660da6dd16b41a5d0016a0259","ym3-494599fb8d24914ba0385fe24593fab1","ym3-4963f6648414f07e32c671809f5748a7","ym3-49a00fcbc42f94691fb8b6b0924cfb3c","ym3-4a6b19b28210e2cf9003da888bbcee7b","ym3-4e1b075fbf70a814a4c8f56361a2039d","ym3-58b65f97b75e04507f47f4d3c63fca1e","ym3-597b862a6288c6002cc592f7f50c2a0f","ym3-6196a5cf853868bda9b41d9cc2f5cd69","ym3-636500ecd2bccf6b30ef97f4221b13a3","ym3-693d3bbab760d33dbfb0301614fdb74d","ym3-70fbe9698d47a3ed2837919d36808858","ym3-7333eebcb2d276d8899d7cf2f807658a","ym3-79c7c064cd7b1bf58cf606159ff85ba7","ym3-7bdaebb592c8936f74631475ecb6da22","ym3-7eb5b7c5d0d3efb4340633bcc6b65271","ym3-7f46f688dbbad383328375531ff3467b","ym3-8744f1d57eda3f03aebef869e7f7fafc","ym3-8e6a647629100b168a327d1ae8751a7c","ym3-907a3a0cff19c76de0d8b17dc9e916af","ym3-96a3afadabbbae6c80fa31c94aa88afb","ym3-96e7d618ff57b40b5dcfd568fe4ca920","ym3-98761c4dca0e5b0a8ef245ea9c742805","ym3-9bb8308988b0035a0639c7a43bd03083","ym3-9f483a4c3b72f6297a6480c4e2ed0bf9","ym3-a3acd3d228963de018cb06b6da028686","ym3-a51aab52aa947facfa574d29ffbe30bb","ym3-ae94099594e0e34c2df10ffadae43b99","ym3-ae9f304e69119ca5911a36ab123f1ddb","ym3-afb093089d194aa933b6f26f175f0971","ym3-b1114a48bdb641861cc760ee87516ef0","ym3-b494b15cc1a28281784db60596a821ca","ym3-b540bb0e050a3a947b7962d19db443ec","ym3-b59d53001a7f1eafeb1743e331adb1fb","ym3-b960f6406054f529b003ec37b4534ba6","ym3-ba7b4b4566e57ea34e402cf50c7c6ccd","ym3-c0d9b9868e768353310c824cd79b79a2","ym3-c1f45779b84429a81b88964865d3e39f","ym3-c3bf3a528bb7cd0e538d99e794131126","ym3-c9848f1639bb8242056b1cde49d8dbbc","ym3-ca6584496374135bd5d03f0ba210a276","ym3-cdd3e522127a44c78573340238b8d6d5","ym3-d335265c2a5885ab546368efb243983f","ym3-d43cc878a26f6e095682802af2959913","ym3-d585a4f8f9f331f4030a669c118594c1","ym3-d8147a9578cc86c4e4abd8b8e216bdf1","ym3-db9b96104c9dde0049324a7b68ee0330","ym3-e248441d3686a28a4f086b31e53e748b","ym3-e481c3a94571f4012142ab39401beb39","ym3-e7ac8443dd64dbf3e96a3f71d21ec987","ym3-e886bb297fbed142060659144bab6a68","ym3-e9878a2d9c1953a51b8f900343a5811d","ym3-e9a3572dc6aa111e62ddd75243f1a1a8","ym3-ea13d0a2758eb228eb19d632cb7d69fb","ym3-ef2ada10d951ff8af342e841788cc60a","ym3-f0a67824fb6191c9af1bc606dff3acf3","ym3-f0bb2ecbb4df21a84612a46905862a26","ym3-f5807c93968603f6d8dce5a2161ea87f","ym3-f5aa64f550f7cf94e61b7f20de6c0d24","ym3-fa16bdb8b32834afa59ed51fc86a0cad","ym3-fbf5a04e05c64bbe5e6b96a8e0ed0743","ym3-video","ym2-150d8146279cae853356103b6e30bab9","ym2-220af54721cb126d39e05e770a459fad","ym2-24d9f14fef7449dbf31811108d21995e","ym2-44b1307e59f616ff693b37e0a69bd099","ym2-470c811bbce9c85c6203eccfd752fba1","ym2-4794588c3c2cb9a9f963dc92871568f9","ym2-4a20cc501d8b8d4d5fd85d58e6e85ca4","ym2-51061b0479054676f148f89504e2ac68","ym2-7163b75fac78dd1bd9f6928d8b11d4a7","you-me-81ba06eae5c8ec09bd4f66ecb6ce694c","ym2-8dabb9d108f610c31ac48e330f86b182","ym2-9496e43511bcf9b0c637a28f12d2ccaa","you-me-a9b398bcd48421c97935f6a7b51cfad8","ym2-d55dc48f824e3702db8ea10217792bd6","ym2-fcf932c66da85cae53ac5e1b360c560e","you-me-webp-04ad7d9fa4481392ae148ab48ffdba1b","you-me-webp-cc110b9b926c5f3ba101ad9af37ea971"] },
    { name: '🐱', ids: ["cat-webp-cat1-0152437c27b3865fa2f84286133fd8b7","cat-webp-cat1-ddde48c71471a93771b0013e4cad64e4","cat-webp-cat1-59681b1d2fa790e134d7a89c933d44f1","cat-webp-cat1-636f755d6c0fbe1290ef9cb965cd5646","cat-webp-cat1-ef21f5b83862095b47d954cbbc2617d6","cat-webp-cat1-5d05c7490511ed89367a5d7ba76279ce","cat-webp-cat1-fca82a1e82639aec08b1f8c2a606e9b0","cat-webp-cat1-cfd61d5bcb1ed06cdcb8a81c95ace3a0","cat-webp-cat1-aeb579e6c0b3728e932b3d8e893ad01e","cat-webp-cat1-50a314c1719832b5d25f9f1bca8573e8","cat-webp-cat1-50b88b426627f354e81090c62f6cbbcc","cat-webp-cat1-b1a622bd086f05e712abb47944d751b5","2-1","cat-jpg-2cad3c5a2df4b78b043b999844e0fcf5","cat-webp-8599adaa8037260cda8cec8d54879fa9","cat-webp-c7a869cc8591f54779edf384baa264b4","cat-webp-f48bb70d3981183fdbcd139690bb6317","cat-webp-747766b0dabec523ded9985f72cb3e3f","cat-webp-58622073698bc6d550e7dc3d9303d9d4","cat-webp-2782a8816b13d4aa9f4eaba5d221ed3d","cat-jpg-0dd09ef4ec719abc69f6c79f76011d34","cat-jpg-45b04eac47760b07f5d9ad58f2801036","cat-jpg-27d7d85209d89ff4bcc16692b7c29cd0","cat-webp-a910b1017168e66d4962cf66b0d20513","cat-webp-6714a1911ca94ca5238bbd2ebe61a8cc","cat-webp-1af53bde3b88fa9e5d517a990169880b","cat-webp-478694454de51654f6abbf2ef9a9f97f","cat-webp-83830b1b48f13cfb435c2582139b4985","cat-webp-aeadea034c218fc866b2523abd84eeb4","cat-webp-f4b8322dda12dc9f60ec430c4ad30724","cat-webp-6644df01ef66f53dfc37c89e7bf2c9e2","cat-webp-1f15857e58fec481772ae59751421320","cat-webp-8e6e731e894ed09d22cab9f55451fc38","cat-webp-4aa5dcfc4395bf5bc82209dfbaf47046","cat-webp-8794f08f3d30a224f31e2bab639f632e","cat-webp-763a2808708adec8ef7c1aa14ffc5063","cat-webp-0c59800abdf2eca3b9e06ec27bec75ad","cat-webp-a9a73a800d45cb75e30d1754c361c22e","cat-webp-1b584e3a35851ffe9abac5d40b48f9b4","cat-webp-1006b06940b7218829d5e215b6d267b8","cat-webp-e4a615b26f5c7e5dfa2b3441ddf1b710","cat-webp-b2e67604d045a5ded222734f8bfb6c0d","cat-webp-dda6637025207e26a19b2d926d3dca5f","cat-webp-183c24750278f9458a0fa13bac90ed20","cat-webp-8a99fd114bf8e33a6db92db444ca0541","cat-webp-4efbe199c6e098f20ca8a7659c283721","cat-webp-06b583d5244479ac288f71e21112ef96","cat-webp-fb3bfd0b95bc57f61b707e764c45279d","cat-webp-ee73af5c4e3b532b24c2beabb9ae77f3","cat-webp-52140aa69e3bbc43c441b5856739a013","cat-webp-474459b89437f74165b7cea4b34c6757","cat-webp-307ccd1085f954259037e8e3e5effb65","cat-webp-79e00128af7a5b4a5776e52f851e2f59","cat-webp-e393c4079495ae2eaccfa7d6349ade60","cat-webp-4dcaea78e459c3a6cecb21bba729386f","cat-webp-dc2c80a2a2b7e94a28fe98fb5ad55ce9","cat-webp-8a707dee11c4534dbb92b319fbfc78a3","cat-webp-1282424ac4df3d7f44f595d7ae4e70a7","cat-webp-8b87cfba71649a5d3259b1d50fc340e8","cat-webp-c86321398e2c84d5f8d7fe452c180f09","cat-webp-67f78d5d2bd2a13181eac3ddf2867d6f","cat-webp-d12897b86534bf6f6ec0097b573113f2","cat-webp-0eedb653d7d0b1aef275494b93459726","cat-webp-7c424e7d95864912ef6d0e2765a084e2","cat-webp-2743c679171273f61189d26bac7ee5ec","cat-webp-9c3fde06bf8566167d7f2f4c87c5770b","cat-webp-410a9f1ccda1b2fea8e92e136e795129","cat-webp-e39769220add107c7a431abaeaef0a22","cat-webp-0b369d9e163609fa1ddffaba2ae71595","cat-webp-bb4fd2e8691210abc7af158c50c17106","cat-webp-7cac7ee81d82e57b3e15c137c4a0f773","cat-webp-dc17e3c277bdb241e178a463adf8db13","cat-webp-fdce66c1a701bad277ff81497188ab79","cat-webp-ce1a7f7b557b9f1a8ac9aeca1e3e3978","cat-webp-2649fc7a8a6122779d2a4d25d3899362","cat-webp-6d8ec7be6d79aa2e38bea4f25ff75da5","cat-webp-6ee2ff004bec5f9c0f6a444bdf0cc9ce","cat-webp-2d1cec1beeedf6dd5bfd36f03a4e76df","cat-webp-fc9b1ccb6de293150e7d4b8ac3d3864e","cat-webp-2bbe4fcce91de4ea7315312f1880c452","cat-webp-5509062ddb203f0e647439aa58e2f699","cat-webp-297899f41c06cfd854b8e1da8ac9b634","cat-webp-7e64bd667fe289838951b4a3e7fec9b3","cat-webp-eb89d385aed43c33be7866a013179d11","cat-webp-04c2a4609a124dd3bf847d87f7e22870","cat-jpg-b2784a2b3c0034e355431950a6fe7ab2"] },
    { name: '🐶', ids: ["dog-webp-dog4-4be88baca41e129f3ba67697c230fcef","dog-webp-dog4-c32f8a73a0ebb51b74b3304a2188b8af","dog-webp-dog4-b7523f54b0856568b5fa88f7a125bcce","dog-webp-dog4-514383c983b3784999c3713a7cecc344","dog-webp-dog4-8287dd958acd21b151ca813152cb4f3f","dog-webp-dog4-de25dfbae045c0259423896fc1bc6aa3","dog-webp-dog4-09a8f7ab1ff8d96222b33fabee23ef3e","dog-webp-dog4-88a3e7ad4fdb0a5e78ee29a131402456","dog-webp-dog4-6ca07a060ba665220da5e050e9290b93","dog-webp-dog4-30fafa43b0980ead4572508f25be2810","dog-webp-dog4-2f5dbe798c25a3e3a17d383ade89da9d","dog-webp-454","dog-webp-455","dog-webp-456","dog-webp-457","dog-webp-458","dog-webp-459","dog-webp-460","dog-webp-461","dog-webp-462","dog-webp-463","dog-webp-464","dog-webp-465","dog-webp-466","dog-webp-467","dog-webp-468","dog-webp-469","dog-webp-470","dog-webp-471","dog-webp-472","dog-webp-473","dog-webp-474","dog-webp-475","dog-webp-476","dog-webp-477","3-1","3-2","3-3","dog2-479","dog2-480","dog2-481","dog2-482","dog2-483","dog2-484","dog2-485","dog2-486","dog2-487","dog2-489","dog2-490","dog2-491","dog2-492","dog2-493","dog2-494","dog2-495","dog2-496","dog2-497","dog2-498","dog2-499","dog2-500","dog2-501","dog2-502","dog2-503","dog2-504","dog2-505","dog2-506","dog2-507","dog2-508","dog2-509","dog2-510","dog2-511","dog2-512","dog2-513","dog2-514","dog2-515","dog2-516","dog2-517","dog2-518","dog2-519","dog2-520","dog2-521","dog2-522","dog2-523","dog3-524","dog3-525","dog3-526","dog3-527","dog3-528","dog3-529","dog3-530","dog3-531","dog3-532","dog3-533","dog3-534","dog3-535","dog3-536","dog3-537","dog3-538","dog3-539","dog3-540","dog3-541","dog3-542","dog3-543","dog3-544","dog3-545","dog3-546","dog3-547","dog3-548","dog3-549","dog3-550","dog3-551","dog3-552","dog3-553","dog3-554","dog3-555","dog3-556","dog3-557","dog3-558","dog3-559","dog3-560","dog3-561","dog3-562","dog3-563","dog3-564","dog3-565","dog3-566","dog3-567","dog3-568","dog3-569","dog3-570","dog3-571","dog3-572","dog3-573","dog3-574","dog3-575","dog3-576","dog3-577","dog3-578","dog3-579","dog3-580","dog3-581","dog3-582","dog3-583","dog3-584"] }
  ];
  const all = albums.flatMap(album => album.ids);
  const key = 'iphone-photos-favorites-v1';
  let favorites = new Set();
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(saved)) favorites = new Set(saved.filter(id => all.includes(id)));
  } catch {}
  const trashKey = 'iphone-photos-trash-v1';
  let deleted = new Set();
  try { deleted = new Set(JSON.parse(localStorage.getItem(trashKey) || '[]').filter(id => all.includes(id))); } catch {}
  let selection = null;
  let filterFavorites = false;
  let tab = 'library';
  let currentAlbum = null;
  let viewing = null;
  const body = get('photosContent');
  const viewer = get('photosViewer');
  const search = get('photosQuery');
  const videoDurations = new Map([
    ['ym3-video', 6],
    ['ym4-video-66f2a3e52428733dd85b47ced0babf5b', 4],
    ['ym4-video-906bf08c472880f80bca963c9fb14e44', 3],
  ]);
  const isVideo = id => videoDurations.has(id);
  const losslessWebpIds = new Set([
    'ym2-24d9f14fef7449dbf31811108d21995e',
    'ym2-874db776e6069c3923bf51341acb3161',
    'ym2-9e98e7706988bcb4f149b7c5adafcf23',
    'ym2-480e8e75b4f1fec6e2610e1c51fa2963',
    'ym2-0d39facb252ae0e593c21600d9c29cff',
    'ym2-86305d2a74bd646b088c0bf731b51250'
  ]);
  const optimizedPhotoIds = new Set(["1-1","1-2","1-3","2-1","3-1","3-2","3-3","cat-jpg-0dd09ef4ec719abc69f6c79f76011d34","cat-jpg-2cad3c5a2df4b78b043b999844e0fcf5","cat-jpg-45b04eac47760b07f5d9ad58f2801036","cat-jpg-b2784a2b3c0034e355431950a6fe7ab2","dog2-479","dog2-480","dog2-481","dog2-484","dog2-485","dog2-486","dog2-487","dog2-489","dog2-490","dog2-491","dog2-492","dog2-494","dog2-496","dog2-497","dog2-498","dog2-500","dog2-501","dog2-502","dog2-503","dog2-504","dog2-505","dog2-506","dog2-507","dog2-508","dog2-509","dog2-510","dog2-511","dog2-512","dog2-513","dog2-514","dog2-515","dog2-516","dog2-517","dog2-518","dog2-519","dog2-520","dog2-521","dog2-522","dog2-523","ym2-05d15a328e822615b9e3546f60da0671","ym2-150d8146279cae853356103b6e30bab9","ym2-220af54721cb126d39e05e770a459fad","ym2-3d9afbd6ee6d0586fedca748c14e413d","ym2-44b1307e59f616ff693b37e0a69bd099","ym2-4564fada8a8f3b44e45a7a12691a1676","ym2-470c811bbce9c85c6203eccfd752fba1","ym2-4794588c3c2cb9a9f963dc92871568f9","ym2-4a20cc501d8b8d4d5fd85d58e6e85ca4","ym2-51061b0479054676f148f89504e2ac68","ym2-5465813bb1fe0c4b732f43e3f54c610e","ym2-55032b5b39a30ba8b4628be38e65fa6f","ym2-5569a937e7fa5ca8e6c5cae4dabbc3fe","ym2-5c0f5a1b400b09687e0314c36df05b44","ym2-5c9cf4f34210129b4b5c3b1a0f67f8dd","ym2-7163b75fac78dd1bd9f6928d8b11d4a7","ym2-8dabb9d108f610c31ac48e330f86b182","ym2-9496e43511bcf9b0c637a28f12d2ccaa","ym2-96328fccbfa00afdba38f1338203d17d","ym2-9a1b9d642d3f33680e22606880ff4a0d","ym2-bd8afd425aca3c91cf2f29293b3b8742","ym2-d55dc48f824e3702db8ea10217792bd6","ym2-de8334f802b1965602116313b2c68bf3","ym2-fcf932c66da85cae53ac5e1b360c560e","ym3-0655d8f6fb334c318d6868409f2fa6e5","ym3-0b5c30ba15546f414b75632b9d33a333","ym3-0fdfbad3dc0c23d4ecee2161ba4e9fee","ym3-10fc45533046161eed49f30a7882eea0","ym3-110c08dd363fbd94fdef4d5cb947ec8e","ym3-1516958c0070be5be5efb015251b2909","ym3-1eca8bf80119ff316a355a7f7a5b8414","ym3-22a87190ad8fed049b029715781e16cc","ym3-2edcde21a3392628296878146c5ba6fe","ym3-2f11935eab869127992582ef54b67ed0","ym3-375c14a7bdb6c2bb90850ac5f32f1a2d","ym3-3b9c662db5ea5a0099fa5ddf45476a07","ym3-415a07af1b94ca545e9cb25dd8fa2ea2","ym3-43b01dece7373fe6bfb5c97cd620d0d4","ym3-43b27c73636c04b3da63a7c361330650","ym3-45ad5aa660da6dd16b41a5d0016a0259","ym3-494599fb8d24914ba0385fe24593fab1","ym3-4963f6648414f07e32c671809f5748a7","ym3-49a00fcbc42f94691fb8b6b0924cfb3c","ym3-4a6b19b28210e2cf9003da888bbcee7b","ym3-4e1b075fbf70a814a4c8f56361a2039d","ym3-58b65f97b75e04507f47f4d3c63fca1e","ym3-597b862a6288c6002cc592f7f50c2a0f","ym3-6196a5cf853868bda9b41d9cc2f5cd69","ym3-636500ecd2bccf6b30ef97f4221b13a3","ym3-693d3bbab760d33dbfb0301614fdb74d","ym3-70fbe9698d47a3ed2837919d36808858","ym3-7333eebcb2d276d8899d7cf2f807658a","ym3-79c7c064cd7b1bf58cf606159ff85ba7","ym3-7bdaebb592c8936f74631475ecb6da22","ym3-7eb5b7c5d0d3efb4340633bcc6b65271","ym3-7f46f688dbbad383328375531ff3467b","ym3-8744f1d57eda3f03aebef869e7f7fafc","ym3-8e6a647629100b168a327d1ae8751a7c","ym3-907a3a0cff19c76de0d8b17dc9e916af","ym3-96a3afadabbbae6c80fa31c94aa88afb","ym3-96e7d618ff57b40b5dcfd568fe4ca920","ym3-98761c4dca0e5b0a8ef245ea9c742805","ym3-9bb8308988b0035a0639c7a43bd03083","ym3-9f483a4c3b72f6297a6480c4e2ed0bf9","ym3-a3acd3d228963de018cb06b6da028686","ym3-a51aab52aa947facfa574d29ffbe30bb","ym3-ae94099594e0e34c2df10ffadae43b99","ym3-ae9f304e69119ca5911a36ab123f1ddb","ym3-afb093089d194aa933b6f26f175f0971","ym3-b1114a48bdb641861cc760ee87516ef0","ym3-b494b15cc1a28281784db60596a821ca","ym3-b540bb0e050a3a947b7962d19db443ec","ym3-b59d53001a7f1eafeb1743e331adb1fb","ym3-b960f6406054f529b003ec37b4534ba6","ym3-ba7b4b4566e57ea34e402cf50c7c6ccd","ym3-c0d9b9868e768353310c824cd79b79a2","ym3-c1f45779b84429a81b88964865d3e39f","ym3-c3bf3a528bb7cd0e538d99e794131126","ym3-c9848f1639bb8242056b1cde49d8dbbc","ym3-ca6584496374135bd5d03f0ba210a276","ym3-cdd3e522127a44c78573340238b8d6d5","ym3-d335265c2a5885ab546368efb243983f","ym3-d43cc878a26f6e095682802af2959913","ym3-d585a4f8f9f331f4030a669c118594c1","ym3-d8147a9578cc86c4e4abd8b8e216bdf1","ym3-db9b96104c9dde0049324a7b68ee0330","ym3-e248441d3686a28a4f086b31e53e748b","ym3-e7ac8443dd64dbf3e96a3f71d21ec987","ym3-e886bb297fbed142060659144bab6a68","ym3-e9878a2d9c1953a51b8f900343a5811d","ym3-e9a3572dc6aa111e62ddd75243f1a1a8","ym3-ea13d0a2758eb228eb19d632cb7d69fb","ym3-f0a67824fb6191c9af1bc606dff3acf3","ym3-f0bb2ecbb4df21a84612a46905862a26","ym3-f5807c93968603f6d8dce5a2161ea87f","ym3-f5aa64f550f7cf94e61b7f20de6c0d24","ym3-fa16bdb8b32834afa59ed51fc86a0cad","ym3-fbf5a04e05c64bbe5e6b96a8e0ed0743","you-me-81ba06eae5c8ec09bd4f66ecb6ce694c","you-me-a9b398bcd48421c97935f6a7b51cfad8","you-me-cake","dog3-524","dog3-525","dog3-526","dog3-527","dog3-528","dog3-529","dog3-530","dog3-531","dog3-532","dog3-533","dog3-534","dog3-535","dog3-536","dog3-537","dog3-538","dog3-539","dog3-540","dog3-541","dog3-542","dog3-543","dog3-544","dog3-545","dog3-546","dog3-547","dog3-548","dog3-549","dog3-550","dog3-551","dog3-552","dog3-553","dog3-554","dog3-555","dog3-556","dog3-557","dog3-558","dog3-559","dog3-560","dog3-561","dog3-562","dog3-563","dog3-564","dog3-565","dog3-566","dog3-567","dog3-568","dog3-569","dog3-570","dog3-571","dog3-572","dog3-573","dog3-574","dog3-575","dog3-576","dog3-577","dog3-578","dog3-579","dog3-580","dog3-582"]);
  const extension = id => {
    if (optimizedPhotoIds.has(id)) return ".webp";
    if (losslessWebpIds.has(id)) return '.webp';
    if (isVideo(id)) return '.mp4';
    if (id.startsWith('ym2-')) return '.png';
    if (id.startsWith('cat-webp-') || id.startsWith('you-me-webp-') || id.startsWith('dog-webp-')) return '.webp';
    return '.jpg';
  };
  const path = id => 'photos/' + id + extension(id);
  const available = ids => ids.filter(id => !deleted.has(id));
  const favoriteIds = () => available(all).filter(id => favorites.has(id));
  const favoriteAlbum = () => ({ name: '个人收藏', ids: favoriteIds(), favorite: true });
  const deletedAlbum = () => ({ name: '最近删除', ids: all.filter(id => deleted.has(id)), trash: true });
  const visibleAlbums = () => [...albums.map(album => ({...album, ids: available(album.ids)})), favoriteAlbum(), ...(deleted.size ? [deletedAlbum()] : [])];
  function hero(ids) {
    const banner = document.createElement('div');
    banner.className = 'photos-hero';
    if (ids.length) banner.append(image(ids[0]), image(ids.at(-1)));
    const heading = document.createElement('h2');
    heading.textContent = '图库';
    const count = document.createElement('small');
    count.textContent = ids.length + ' 张照片';
    banner.append(heading, count);
    return banner;
  }
  function sheet(title, text, actions = []) {
    const dialog = get('photosDialog');
    get('photosDialogTitle').textContent = title;
    get('photosDialogText').textContent = text;
    get('photosDialogActions').replaceChildren(...actions.map(([label, run]) => {
      const button = document.createElement('button');
      button.textContent = label;
      button.onclick = () => { dialog.close(); run(); };
      return button;
    }));
    dialog.showModal();
  }
  function moveToTrash(ids, restore = false) {
    for (const id of ids) {
      if (restore) deleted.delete(id);
      else deleted.add(id);
    }
    try { localStorage.setItem(trashKey, JSON.stringify([...deleted])); } catch {}
    selection = null;
    viewing = null;
    render();
  }
  function image(id) {
    const img = document.createElement('img');
    img.src = isVideo(id) ? 'photos/' + id + '.jpg' : path(id);
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    return img;
  }
  function grid(ids) {
    if (!ids.length) {
      const empty = document.createElement('p');
      empty.className = 'photos-empty';
      empty.textContent = '暂无照片';
      return empty;
    }
    const list = document.createElement('div');
    list.className = 'photos-grid';
    ids.forEach((id, index) => {
      const button = document.createElement('button');
      button.className = 'photos-thumb';
      button.setAttribute('aria-label', '查看第 ' + (index + 1) + ' 张照片');
      button.append(image(id));
      if (isVideo(id)) {
        const duration = document.createElement('b');
        const seconds = videoDurations.get(id);
        duration.textContent = '▶ ' + Math.floor(seconds / 60) + ':' + String(seconds % 60).padStart(2, '0');
        duration.style.left = 'auto';
        duration.style.right = '6px';
        button.append(duration);
      }
      if (favorites.has(id)) {
        const badge = document.createElement('b');
        badge.textContent = '♥';
        badge.setAttribute('aria-hidden', 'true');
        button.append(badge);
      }
      if (selection) button.setAttribute('aria-pressed', String(selection.has(id)));
      button.onclick = () => {
        if (selection) {
          if (selection.has(id)) selection.delete(id);
          else selection.add(id);
        } else viewing = { ids, index };
        render();
      };
      list.append(button);
    });
    return list;
  }
  function collections(items) {
    const list = document.createElement('div');
    list.className = 'photos-albums';
    for (const album of items) {
      const card = document.createElement('button');
      const cover = document.createElement('div');
      const title = document.createElement('strong');
      const count = document.createElement('small');
      card.className = 'photos-album';
      cover.className = 'photos-cover';
      if (album.ids[0]) cover.append(image(album.cover || album.ids[0]));
      else {
        const heart = document.createElement('span');
        heart.textContent = '♡';
        cover.append(heart);
      }
      title.textContent = album.name;
      count.textContent = album.ids.length + ' 张照片';
      card.append(cover, title, count);
      card.onclick = () => { currentAlbum = album; render(); };
      list.append(card);
    }
    return list;
  }
  function render() {
    const video = get('photosVideo');
    const videoPlaying = viewing && isVideo(viewing.ids[viewing.index]);
    get('photosFull').hidden = Boolean(videoPlaying);
    video.hidden = !videoPlaying;
    if (!videoPlaying) video.pause();
    const isViewing = Boolean(viewing);
    const library = !isViewing && tab === 'library' && !currentAlbum;
    get('photosView').dataset.layout = isViewing ? 'viewer' : library ? 'library' : 'collections';
    if (get('photosView').classList.contains('active')) get('status').classList.toggle('light', library);
    get('photosFilter').hidden = !library || !!selection;
    get('photosSelect').hidden = !library;
    get('photosSelect').textContent = selection ? (selection.size ? '已选 ' + selection.size : '取消') : '选择';
    body.hidden = isViewing;
    viewer.hidden = !isViewing;
    get('photosNav').hidden = isViewing;
    search.hidden = isViewing || tab !== 'search' || Boolean(currentAlbum);
    get('photosLibrary').setAttribute('aria-pressed', String(tab === 'library'));
    get('photosCollections').setAttribute('aria-pressed', String(tab === 'collections'));
    get('photosSearchBtn').setAttribute('aria-pressed', String(tab === 'search'));
    if (isViewing) {
      const { ids, index } = viewing;
      const id = ids[index];
      get('photosTitle').textContent = '照片';
      if (isVideo(id)) {
        if (video.getAttribute('src') !== path(id)) {
          video.src = path(id);
          video.poster = 'photos/' + id + '.jpg';
        }
      } else get('photosFull').src = path(id);
      get('photosCaption').textContent = (index + 1) + ' / ' + ids.length;
      const heart = get('photosFavorite');
      const liked = favorites.has(id);
      heart.hidden = deleted.has(id);
      get('photosTrash').setAttribute('aria-label', deleted.has(id) ? '恢复照片' : '移到最近删除');
      heart.textContent = liked ? '♥' : '♡';
      heart.setAttribute('aria-pressed', String(liked));
      heart.setAttribute('aria-label', liked ? '取消收藏' : '收藏照片');
      return;
    }
    if (currentAlbum) {
      get('photosTitle').textContent = currentAlbum.name;
      body.replaceChildren(grid(currentAlbum.favorite ? favoriteIds() : currentAlbum.trash ? deletedAlbum().ids : available(currentAlbum.ids)));
    } else if (tab === 'library') {
      get('photosTitle').textContent = '图库';
      const ids = filterFavorites ? favoriteIds() : available(all);
      body.replaceChildren(hero(ids), grid(ids));
    } else {
      get('photosTitle').textContent = tab === 'search' ? '搜索' : '相簿';
      const query = search.value.trim().toLowerCase();
      const items = tab === 'search' ? visibleAlbums().filter(album => album.name.toLowerCase().includes(query)) : visibleAlbums();
      body.replaceChildren(collections(items));
      if (!items.length) {
        const empty = document.createElement('p');
        empty.className = 'photos-empty';
        empty.textContent = '未找到相簿';
        body.append(empty);
      }
    }
  }
  function selectTab(next) {
    viewing = null;
    selection = null;
    currentAlbum = null;
    tab = next;
    search.value = '';
    render();
    body.scrollTop = 0;
  }
  function move(direction) {
    if (!viewing) return;
    const next = viewing.index + direction;
    if (next < 0 || next >= viewing.ids.length) return;
    viewing.index = next;
    render();
  }
  get('openPhotos').onclick = () => { showView('photosView'); selectTab('library'); };
  get('photosBack').onclick = () => {
    if (viewing) { viewing = null; render(); }
    else if (currentAlbum) { currentAlbum = null; render(); }
    else { showView('homeView'); ensureArrival(); }
  };
  get('photosLibrary').onclick = () => selectTab('library');
  get('photosCollections').onclick = () => selectTab('collections');
  get('photosSearchBtn').onclick = () => { selectTab('search'); search.focus(); };
  search.oninput = render;
  get('photosFilter').onclick = () => sheet('筛选', '', [
    ['所有照片', () => { filterFavorites = false; render(); }],
    ['个人收藏', () => { filterFavorites = true; render(); }]
  ]);
  get('photosSelect').onclick = () => {
    if (selection?.size) {
      const ids = [...selection];
      sheet('已选 ' + ids.length + ' 张照片', '', [
        ['加入个人收藏', () => {
          ids.forEach(id => favorites.add(id));
          saveFavorites();
          selection = null;
          render();
        }],
        ['移到最近删除', () => moveToTrash(ids)],
        ['取消选择', () => { selection = null; render(); }]
      ]);
    } else {
      selection = selection ? null : new Set();
      render();
    }
  };
  get('photosInfo').onclick = () => {
    if (!viewing) return;
    const id = viewing.ids[viewing.index], photo = get(isVideo(id) ? 'photosVideo' : 'photosFull');
    const name = albums.find(album => album.ids.includes(id)).name;
    const width = photo.naturalWidth || photo.videoWidth, height = photo.naturalHeight || photo.videoHeight;
    sheet(isVideo(id) ? '视频信息' : '照片信息', name + (width ? ' · ' + width + ' × ' + height : ''));
  };
  get('photosTrash').onclick = () => {
    if (!viewing) return;
    const id = viewing.ids[viewing.index];
    if (deleted.has(id)) sheet('恢复照片？', '照片会重新出现在原来的相簿中。', [['恢复', () => moveToTrash([id], true)]]);
    else sheet('删除照片？', '照片将移到「最近删除」。', [['删除照片', () => moveToTrash([id])]]);
  };
  get('photosShare').onclick = async () => {
    if (!viewing) return;
    const id = viewing.ids[viewing.index];
    if (navigator.share) {
      try {
        const response = await fetch(path(id));
        if (response.ok) {
          const file = new File([await response.blob()], '照片-' + id + extension(id), {type: isVideo(id) ? 'video/mp4' : 'image/' + (extension(id) === '.jpg' ? 'jpeg' : extension(id).slice(1))});
          if (navigator.canShare?.({files:[file]})) {
            await navigator.share({files:[file]});
            return;
          }
        }
      } catch (error) { if (error.name === 'AbortError') return; }
    }
    sheet('分享照片', '', [['保存照片', () => {
      const link = document.createElement('a');
      link.href = path(id);
      link.download = '照片-' + id + extension(id);
      link.click();
    }]]);
  };
  function saveFavorites() {
    try { localStorage.setItem(key, JSON.stringify([...favorites])); } catch {}
  }
  document.addEventListener('keydown', event => {
    if (!viewing || !get('photosView').classList.contains('active') || get('photosDialog').open) return;
    if (event.key === 'ArrowLeft') move(-1);
    if (event.key === 'ArrowRight') move(1);
  });
  get('photosFavorite').onclick = () => {
    if (!viewing) return;
    const id = viewing.ids[viewing.index];
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);
    saveFavorites();
    render();
  };
  const visibility = new MutationObserver(() => {
    if (!get('photosView').classList.contains('active')) get('photosVideo').pause();
  });
  visibility.observe(get('photosView'), {attributes:true, attributeFilter:['class']});
  let swipeStart;
  const full = get('photosFull');
  full.addEventListener('touchstart', event => { swipeStart = event.touches[0].clientX; }, { passive: true });
  full.addEventListener('touchend', event => {
    if (swipeStart === undefined) return;
    const distance = event.changedTouches[0].clientX - swipeStart;
    swipeStart = undefined;
    if (Math.abs(distance) > 48) move(distance < 0 ? 1 : -1);
  }, { passive: true });
})();
