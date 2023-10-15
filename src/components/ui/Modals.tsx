import { ReactNode, useEffect, useState } from 'react'
import { BiX } from 'react-icons/bi'

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

const Modals = ({ isOpen, onClose, title, children }: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    setIsModalVisible(isOpen)
  }, [isOpen])

  const closeModal = () => {
    setIsModalVisible(false)
    onClose()
  }

  return (
    <>
      {isModalVisible && (
        <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>
          <div className="z-50 flex flex-col gap-2 rounded-lg bg-white p-4 shadow-lg">
            <div className="flex min-w-[200px] flex-row items-center justify-between">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                className="btn btn-sm btn-square btn-outline hover:btn-neutral"
                onClick={closeModal}
              >
                <BiX size={24} />
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modals
